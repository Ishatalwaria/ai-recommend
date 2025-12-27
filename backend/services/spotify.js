import dotenv from "dotenv";
dotenv.config();


import axios from "axios";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = null;
let tokenExpiry = 0;

/**
 * Generate a fresh access token using Spotify Client Credentials Flow
 */
async function getAccessToken() {
  // If we already have a valid token, reuse it
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  const authString = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({ grant_type: "client_credentials" }).toString(),
      {
        headers: {
          "Authorization": `Basic ${authString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in * 1000; // expiry in ms

    return accessToken;
  } catch (error) {
    console.error("❌ Error fetching Spotify access token:", error.response?.data || error.message);
    throw new Error("Failed to get Spotify token");
  }
}

/**
 * Search for tracks on Spotify
 * @param {string} query - The search keyword (e.g., song name, mood, genre, artist)
 */
export async function searchTracks(query) {
  try {
    const token = await getAccessToken();

    // Ensure we always have a non-empty query and bias to Hindi results
    const ensuredQuery = (query && String(query).trim().length > 0)
      ? `${query} hindi bollywood`
      : "hindi bollywood";

    // Add a random offset to increase variety across requests
    const randomOffset = Math.floor(Math.random() * 100);

    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: ensuredQuery,
        type: "track",
        limit: 10,
        offset: randomOffset,
        market: "IN", // Prefer Indian catalog for Hindi songs
      },
    });

    // Extract useful details
    const tracks = response.data.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      preview_url: track.preview_url,
      external_url: track.external_urls.spotify,
      artist: track.artists[0]?.name,
      album: track.album.name,
      album_image: track.album.images[0]?.url,
    }));

    return tracks;
  } catch (error) {
    console.error("❌ Error searching Spotify tracks:", error.response?.data || error.message);
    throw new Error("Failed to search Spotify tracks");
  }
}

/**
 * Get recommendations using Spotify's recommendations endpoint based on seed genres.
 * Uses Indian market and randomizes constraints to get variety.
 */
export async function getRecommendationsByGenres(genres = []) {
  if (!Array.isArray(genres)) genres = [];

  // If no genres provided, fallback to searching Hindi/Bollywood directly
  if (genres.length === 0) {
    return searchTracks("hindi bollywood");
  }

  try {
    const token = await getAccessToken();

    // De-duplicate, cap to max 5 seed genres per Spotify API
    const seeds = [...new Set(genres)].slice(0, 5);

    // Add small randomization to popularity to get different tracks
    const minPopularity = 20 + Math.floor(Math.random() * 60); // 20-79

    const response = await axios.get("https://api.spotify.com/v1/recommendations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        seed_genres: seeds.join(","),
        limit: 10,
        market: "IN",
        min_popularity: minPopularity,
        target_energy: parseFloat((Math.random() * 0.5 + 0.4).toFixed(1)), // 0.4 - 0.9
        target_valence: parseFloat((Math.random() * 0.5 + 0.4).toFixed(1)), // 0.4 - 0.9
      },
    });

    const tracks = response.data.tracks.map((track) => ({
      id: track.id,
      name: track.name,
      preview_url: track.preview_url,
      external_url: track.external_urls.spotify,
      artist: track.artists[0]?.name,
      album: track.album.name,
      album_image: track.album.images[0]?.url,
    }));

    return tracks;
  } catch (error) {
    console.error("❌ Error getting Spotify recommendations:", error.response?.data || error.message);
    // Fallback to search
    return searchTracks("hindi bollywood");
  }
}


