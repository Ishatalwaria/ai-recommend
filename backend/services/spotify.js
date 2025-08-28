// import dotenv from "dotenv";
// dotenv.config();

// // Smart recommendation system using curated database
// // This provides real Spotify URLs without relying on the problematic Spotify API

// // Comprehensive song database organized by mood and genre
// const SONG_DATABASE = {
//     pop: [
//       {
//       id: "pop1",
//         name: "Blinding Lights",
//         artist: "The Weeknd",
//         url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
//         album: "After Hours",
//         image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
//       },
//       {
//       id: "pop2",
//         name: "As It Was",
//         artist: "Harry Styles",
//         url: "https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7",
//         album: "Harry's House",
//         image: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
      
//       },
//       {
//         id: "pop3",
//         name: "Stay",
//         artist: "The Kid LAROI & Justin Bieber",
//         url: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20",
//         album: "F*CK LOVE 3: OVER YOU",
//         image: "https://i.scdn.co/image/ab67616d0000b273db8d87a4a6d9d0c775403f85"
//       },
//       {
//         id: "pop4",
//         name: "Shivers",
//         artist: "Ed Sheeran",
//         url: "https://open.spotify.com/track/6b0Sxw3vO4tY6d1OWJIRlj",
//         album: "= (Equals)",
//         image: "https://i.scdn.co/image/ab67616d0000b273f5b5f4691a229f82442afede"
//       },
//       {
//         id: "pop5",
//         name: "Bad Habits",
//         artist: "Ed Sheeran",
//         url: "https://open.spotify.com/track/3rmo8F54jFF8OgYsqTxm5d",
//         album: "= (Equals)",
//         image: "https://i.scdn.co/image/ab67616d0000b273f5b5f4691a229f82442afede"
//       },
//       {
//         id: "pop6",
//         name: "Levitating",
//         artist: "Dua Lipa",
//         url: "https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP",
//         album: "Future Nostalgia",
//         image: "https://i.scdn.co/image/ab67616d0000b2737b1dc54802df9e33f5d6c05f"
//     }
//   ],
//   rock: [
//     {
//       id: "rock1",
//       name: "Bohemian Rhapsody",
//       artist: "Queen",
//       url: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb",
//       album: "A Night At The Opera",
      
//       image: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
//     },
//     {
//       id: "rock2",
//       name: "Sweet Child O' Mine",
//       artist: "Guns N' Roses",
//       url: "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnuZWg",
//       album: "Appetite For Destruction",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "rock3",
//       name: "Stairway to Heaven",
//       artist: "Led Zeppelin",
//       url: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc",
//       album: "Led Zeppelin IV",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "rock4",
//       name: "Hotel California",
//       artist: "Eagles",
//       url: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv",
//       album: "Hotel California",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "rock5",
//       name: "Wonderwall",
//       artist: "Oasis",
//       url: "https://open.spotify.com/track/2CT3r93YuSHtm57mjxvjhH",
//       album: "(What's The Story) Morning Glory?",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "rock6",
//       name: "Smells Like Teen Spirit",
//       artist: "Nirvana",
//       url: "https://open.spotify.com/track/5ghIJDpPJ3UzPBAq2KQk4L",
//       album: "Nevermind",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     }
//   ],
//   hiphop: [
//     {
//       id: "hiphop1",
//       name: "God's Plan",
//       artist: "Drake",
//       url: "https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn",
//       album: "Scorpion",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "hiphop2",
//       name: "In Da Club",
//       artist: "50 Cent",
//       url: "https://open.spotify.com/track/4tyq9eICGLUoGprQqKjq5g",
//       album: "Get Rich Or Die Tryin'",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "hiphop3",
//       name: "Stronger",
//       artist: "Kanye West",
//       url: "https://open.spotify.com/track/0j2T0R9dR9qdJYsB7ciXhf",
//       album: "Graduation",
//       image: "https://i.scdn.co/image/ab67616d0000485126f7f19c7f0381e56156c94a"
//     },
//     {
//       id: "hiphop4",
//       name: "Lose Yourself",
//       artist: "Eminem",
//       url: "https://open.spotify.com/track/5Z01UMMf7V1o0MzF86s6WJ",
//       album: "8 Mile",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "hiphop5",
//       name: "Empire State of Mind",
//       artist: "Jay-Z & Alicia Keys",
//       url: "https://open.spotify.com/track/2igwFfvr1OAGX9SKDCPBwO",
//       album: "The Blueprint 3",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "hiphop6",
//       name: "Nuthin' But A 'G' Thang",
//       artist: "Dr. Dre & Snoop Dogg",
//       url: "https://open.spotify.com/track/5T8pUDwpLh9m6aYz5Jk1I9",
//       album: "The Chronic",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     }
//   ],
//   jazz: [
//     {
//       id: "jazz1",
//       name: "Take Five",
//       artist: "Dave Brubeck",
//       url: "https://open.spotify.com/track/1YQWosTIljIvxAgHWTp7KP",
//       album: "Time Out",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "jazz2",
//       name: "So What",
//       artist: "Miles Davis",
//       url: "https://open.spotify.com/track/4vLYewWIvqHfKtJDk8c8tq",
//       album: "Kind of Blue",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "jazz3",
//       name: "What A Wonderful World",
//       artist: "Louis Armstrong",
//       url: "https://open.spotify.com/track/29U7stRjqHU6rMiS8BfaI9",
//       album: "What A Wonderful World",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "jazz4",
//       name: "Fly Me To The Moon",
//       artist: "Frank Sinatra",
//       url: "https://open.spotify.com/track/5b7OgznPJJr1vHNYGyvxau",
//       album: "It Might As Well Be Swing",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "jazz5",
//       name: "The Girl From Ipanema",
//       artist: "Stan Getz & João Gilberto",
//       url: "https://open.spotify.com/track/5FJdGdDRQzKq3h9gYAgJ2x",
//       album: "Getz/Gilberto",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "jazz6",
//       name: "My Funny Valentine",
//       artist: "Chet Baker",
//       url: "https://open.spotify.com/track/4l9hml2UCnxoNI3yCdL1BW",
//       album: "Chet Baker Sings",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     }
//   ],
//   electronic: [
//     {
//       id: "electronic1",
//       name: "Sandstorm",
//       artist: "Darude",
//       url: "https://open.spotify.com/track/6Sy9BUbgFse0n0LPA5lwy5",
//       album: "Before the Storm",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "electronic2",
//       name: "Strobe",
//       artist: "Deadmau5",
//       url: "https://open.spotify.com/track/0Q2iw8xh9u0i6GevAK1P8f",
//       album: "For Lack of a Better Name",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "electronic3",
//       name: "Levels",
//       artist: "Avicii",
//       url: "https://open.spotify.com/track/1lfJdgn7JXJIhHR91gEkQE",
//       album: "True",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "electronic4",
//       name: "Wake Me Up",
//       artist: "Avicii",
//       url: "https://open.spotify.com/track/0nrRP2bk19rLc0orkWPQk2",
//       album: "True",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "electronic5",
//       name: "Titanium",
//       artist: "David Guetta ft. Sia",
//       url: "https://open.spotify.com/track/0TDLuuLlV54CkRRUOahJb4",
//       album: "Nothing but the Beat",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "electronic6",
//       name: "Clarity",
//       artist: "Zedd ft. Foxes",
//       url: "https://open.spotify.com/track/60wwxj6Dd9NJlirf84wr2c",
//       album: "Clarity",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     }
//   ],
//   country: [
//     {
//       id: "country1",
//       name: "Old Town Road",
//       artist: "Lil Nas X",
//       url: "https://open.spotify.com/track/0F7FA14euOIX8KcbEturGH",
//       album: "7",
//       image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//     },
//     {
//       id: "country2",
//       name: "The Gambler",
//       artist: "Kenny Rogers",
//       url: "https://open.spotify.com/track/5HqBxkAcxHcBEtvGSjQ6PM",
//       album: "The Gambler",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "country3",
//       name: "Ring of Fire",
//       artist: "Johnny Cash",
//       url: "https://open.spotify.com/track/5YzXskwQdPrT48EnVtuHpQ",
//       album: "Ring of Fire: The Best of Johnny Cash",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "country4",
//       name: "Jolene",
//       artist: "Dolly Parton",
//       url: "https://open.spotify.com/track/2SpEHTbUuebeLkgs9QB7Ue",
//       album: "Jolene",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "country5",
//       name: "Friends in Low Places",
//       artist: "Garth Brooks",
//       url: "https://open.spotify.com/track/2QtE5Qv5XmGTyEACwKp6L0",
//       album: "No Fences",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "country6",
//       name: "I Walk the Line",
//       artist: "Johnny Cash",
//       url: "https://open.spotify.com/track/7wXiiLUYcudrZLOkxo2oZ7",
//       album: "I Walk the Line",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       }
//     ],
//   rnb: [
//     {
//       id: "rnb1",
//       name: "Blinding Lights",
//       artist: "The Weeknd",
//       url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
//       album: "After Hours",
//       image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
//     },
//     {
//       id: "rnb2",
//         name: "Uptown Funk",
//         artist: "Mark Ronson ft. Bruno Mars",
//         url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
//         album: "Uptown Special",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "rnb3",
//       name: "All of Me",
//       artist: "John Legend",
//       url: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
//       album: "Love In The Future",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "rnb4",
//       name: "Thinking Out Loud",
//       artist: "Ed Sheeran",
//       url: "https://open.spotify.com/track/1Slwb6dOIWAjWIr1FmD8I3",
//       album: "x (Multiply)",
//         image: "https://i.scdn.co/image/ab67616d0000b2737fefbc5c1f4b91b8a53f9e5b"
//       },
//       {
//       id: "rnb5",
//       name: "Perfect",
//       artist: "Ed Sheeran",
//       url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
//       album: "÷ (Divide)",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "rnb6",
//       name: "Say You Won't Let Go",
//       artist: "James Arthur",
//       url: "https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh",
//       album: "Back from the Edge",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       }
//     ],
//     acoustic: [
//       {
//       id: "acoustic1",
//         name: "Ho Hey",
//         artist: "The Lumineers",
//         url: "https://open.spotify.com/track/0W4K6pX3YNI4VZ6eGlj6ON",
//         album: "The Lumineers",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "acoustic2",
//         name: "Riptide",
//         artist: "Vance Joy",
//         url: "https://open.spotify.com/track/3JvrhDOgAt6p7K8mDyZwRd",
//         album: "Dream Your Life Away",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "acoustic3",
//         name: "Skinny Love",
//         artist: "Bon Iver",
//         url: "https://open.spotify.com/track/3B3eOgLJSqPEA0RfboIQ40",
//         album: "For Emma, Forever Ago",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "acoustic4",
//         name: "The A Team",
//         artist: "Ed Sheeran",
//         url: "https://open.spotify.com/track/1VdZ0vKfR5jneCmWIUAMxK",
//         album: "+ (Plus)",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "acoustic5",
//         name: "Little Talks",
//         artist: "Of Monsters and Men",
//         url: "https://open.spotify.com/track/2ihCaVdNZmnHZWt0fvAM7B",
//         album: "My Head Is An Animal",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "acoustic6",
//         name: "Home",
//         artist: "Edward Sharpe & The Magnetic Zeros",
//         url: "https://open.spotify.com/track/3ZQmGiZQwyvIEwH6av6niM",
//         album: "Up from Below",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       }
//     ],
//   folk: [
//     {
//       id: "folk1",
//       name: "The Sound of Silence",
//       artist: "Simon & Garfunkel",
//       url: "https://open.spotify.com/track/2ic3fG7gOjA4uYyBuJDT5w",
//       album: "Sounds of Silence",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "folk2",
//       name: "Mr. Tambourine Man",
//       artist: "Bob Dylan",
//       url: "https://open.spotify.com/track/2J6mG7Pm6y0YmfeLvToRBS",
//       album: "Bringing It All Back Home",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "folk3",
//       name: "Big Yellow Taxi",
//       artist: "Joni Mitchell",
//       url: "https://open.spotify.com/track/6UkMcAA19lTdjs22jtB7o2",
//       album: "Ladies of the Canyon",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "folk4",
//       name: "Fire and Rain",
//       artist: "James Taylor",
//       url: "https://open.spotify.com/track/65LytrytAJqXKQbeoDn1P1",
//       album: "Sweet Baby James",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "folk5",
//       name: "The Times They Are A-Changin'",
//       artist: "Bob Dylan",
//       url: "https://open.spotify.com/track/0v5XJMBDwiK8fup3jAWzct",
//       album: "The Times They Are A-Changin'",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       },
//       {
//       id: "folk6",
//       name: "Both Sides Now",
//       artist: "Joni Mitchell",
//       url: "https://open.spotify.com/track/3NW1q4qrFCllspz4Yc5rUP",
//       album: "Clouds",
//         image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b"
//       }
//     ]
//   };

// // Mood to genre mapping for smart recommendations
// const MOOD_TO_GENRES = {
//   chill: ["acoustic", "folk", "jazz"],
//   party: ["pop", "hiphop", "electronic"],
//   acoustic: ["acoustic", "folk", "jazz"],
//   dance: ["pop", "electronic", "hiphop"],
//   romance: ["pop", "rnb", "jazz"],
//   sad: ["acoustic", "folk", "jazz"],
//   workout: ["rock", "pop", "hiphop"],
//   happy: ["pop", "electronic", "country"],
//   pop: ["pop", "rock", "hiphop", "rnb"]
// };

// /**
//  * Smart recommendation system using curated database
//  * @param {string[]} seedGenres - moods detected from Hugging Face
//  */
// export async function getRecommendations(seedGenres = ["pop"]) {
//   console.log("🎵 Using smart recommendation system with genres:", seedGenres);
  
//   try {
//     const allSongs = [];
//     const usedIds = new Set();
    
//     // Get songs for each genre
//     seedGenres.forEach(genre => {
//       const genreSongs = SONG_DATABASE[genre] || SONG_DATABASE.pop;
//       if (genreSongs) {
//         genreSongs.forEach(song => {
//           if (!usedIds.has(song.id)) {
//             allSongs.push({
//               id: song.id,
//               name: song.name,
//               artist: song.artist,
//               url: song.url,
//               preview_url: null,
//               album: song.album,
//               image: song.image
//             });
//             usedIds.add(song.id);
//           }
//         });
//       }
//     });
    
//     // Shuffle and return requested number of songs
//     const shuffled = allSongs.sort(() => Math.random() - 0.5);
//     const result = shuffled.slice(0, 6);
    
//     console.log("🎵 Smart recommendations returned", result.length, "tracks");
//     return result;
//   } catch (err) {
//     console.error("❌ Smart recommendation error:", err.message);
//     // Fallback to basic pop songs
//     return SONG_DATABASE.pop.slice(0, 6).map(song => ({
//       id: song.id,
//       name: song.name,
//       artist: song.artist,
//       url: song.url,
//       preview_url: null,
//       album: song.album,
//       image: song.image
//     }));
//   }
// }

// services/spotify.js
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

    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: "track",
        limit: 10,
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


