import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";
dotenv.config();

const spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

let lastTokenTs = 0;

// Refresh token every 50 minutes
async function ensureToken() {
  const now = Date.now();
  if (!spotify.getAccessToken() || now - lastTokenTs > 50 * 60 * 1000) {
    const data = await spotify.clientCredentialsGrant();
    spotify.setAccessToken(data.body.access_token);
    lastTokenTs = now;
  }
}

/**
 * Get Spotify recommendations based on moods/genres
 * @param {string[]} seedGenres - moods detected from Hugging Face
 */
export async function getRecommendations(seedGenres = ["pop"]) {
  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
    throw new Error("Missing Spotify credentials");
  }

  await ensureToken();

  try {
    // Get available Spotify genres
    const avail = await spotify.getAvailableGenreSeeds();
    const allowed = new Set(avail.body.genres);

    // Filter only genres that Spotify supports
    const seeds = seedGenres.filter((g) => allowed.has(g));
    const finalSeeds = seeds.length ? seeds.slice(0, 5) : ["pop"];

    // Get recommendations
    const rec = await spotify.getRecommendations({
      seed_genres: finalSeeds,
      limit: 6,
    });

    return (rec.body.tracks || []).map((t) => ({
      id: t.id,
      name: t.name,
      artist: t.artists.map((a) => a.name).join(", "),
      url: t.external_urls?.spotify,
      preview_url: t.preview_url,
      album: t.album?.name,
      image: t.album?.images?.[0]?.url,
    }));
  } catch (err) {
    console.error("Spotify API call failed:", err.response?.data || err.message);
    return [];
  }
}
