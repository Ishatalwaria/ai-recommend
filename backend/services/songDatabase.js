// // Comprehensive song database organized by mood and genre
// // This replaces the Spotify API dependency with a curated collection of popular songs

// const SONG_DATABASE = {
//   pop: [
//     {
//       id: "pop1",
//       name: "Blinding Lights",
//       artist: "The Weeknd",
//       genre: "pop",
//       mood: "energetic",
//       spotify_url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
//       image_url: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
//       album: "After Hours"
//     },
//     {
//       id: "pop2",
//       name: "As It Was",
//       artist: "Harry Styles",
//       genre: "pop",
//       mood: "chill",
//       spotify_url: "https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Harry's House"
//     },
//     {
//       id: "pop3",
//       name: "Stay",
//       artist: "The Kid LAROI & Justin Bieber",
//       genre: "pop",
//       mood: "romantic",
//       spotify_url: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "F*CK LOVE 3: OVER YOU"
//     },
//     {
//       id: "pop4",
//       name: "Shivers",
//       artist: "Ed Sheeran",
//       genre: "pop",
//       mood: "happy",
//       spotify_url: "https://open.spotify.com/track/6b0Sxw3vO4tY6d1OWJIRlj",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "= (Equals)"
//     },
//     {
//       id: "pop5",
//       name: "Bad Habits",
//       artist: "Ed Sheeran",
//       genre: "pop",
//       mood: "energetic",
//       spotify_url: "https://open.spotify.com/track/3rmo8F54jFF8OgYsqTxm5d",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "= (Equals)"
//     },
//     {
//       id: "pop6",
//       name: "Levitating",
//       artist: "Dua Lipa",
//       genre: "pop",
//       mood: "dance",
//       spotify_url: "https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Future Nostalgia"
//     }
//   ],
//   chill: [
//     {
//       id: "chill1",
//       name: "Circles",
//       artist: "Post Malone",
//       genre: "pop",
//       mood: "chill",
//       spotify_url: "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6aba1d5c5",
//       album: "Hollywood's Bleeding"
//     },
//     {
//       id: "chill2",
//       name: "Someone You Loved",
//       artist: "Lewis Capaldi",
//       genre: "pop",
//       mood: "sad",
//       spotify_url: "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Divinely Uninspired to a Hellish Extent"
//     },
//     {
//       id: "chill3",
//       name: "All of Me",
//       artist: "John Legend",
//       genre: "rnb",
//       mood: "romantic",
//       spotify_url: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Love In The Future"
//     },
//     {
//       id: "chill4",
//       name: "Perfect",
//       artist: "Ed Sheeran",
//       genre: "pop",
//       mood: "romantic",
//       spotify_url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "÷ (Divide)"
//     },
//     {
//       id: "chill5",
//       name: "Say You Won't Let Go",
//       artist: "James Arthur",
//       genre: "pop",
//       mood: "romantic",
//       spotify_url: "https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Back from the Edge"
//     },
//     {
//       id: "chill6",
//       name: "Photograph",
//       artist: "Ed Sheeran",
//       genre: "pop",
//       mood: "nostalgic",
//       spotify_url: "https://open.spotify.com/track/6fxVffaTuwjgEk5h9QyRjy",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "x (Multiply)"
//     }
//   ],
//   party: [
//     {
//       id: "party1",
//       name: "Uptown Funk",
//       artist: "Mark Ronson ft. Bruno Mars",
//       genre: "pop",
//       mood: "party",
//       spotify_url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Uptown Special"
//     },
//     {
//       id: "party2",
//       name: "Shake It Off",
//       artist: "Taylor Swift",
//       genre: "pop",
//       mood: "happy",
//       spotify_url: "https://open.spotify.com/track/5yK7v6X8rHtXvclt6CcKT0",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "1989"
//     },
//     {
//       id: "party3",
//       name: "Can't Stop the Feeling!",
//       artist: "Justin Timberlake",
//       genre: "pop",
//       mood: "happy",
//       spotify_url: "https://open.spotify.com/track/6JV2JOEocMgcZxYWZ6RqIg",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Trolls (Original Motion Picture Soundtrack)"
//     },
//     {
//       id: "party4",
//       name: "Happy",
//       artist: "Pharrell Williams",
//       genre: "pop",
//       mood: "happy",
//       spotify_url: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "G I R L"
//     },
//     {
//       id: "party5",
//       name: "I Gotta Feeling",
//       artist: "The Black Eyed Peas",
//       genre: "pop",
//       mood: "party",
//       spotify_url: "https://open.spotify.com/track/2H1047e0oMSj10dpg7p2qh",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "THE E.N.D. (THE ENERGY NEVER DIES)"
//     },
//     {
//       id: "party6",
//       name: "Party Rock Anthem",
//       artist: "LMFAO ft. Lauren Bennett, GoonRock",
//       genre: "dance",
//       mood: "party",
//       spotify_url: "https://open.spotify.com/track/0IkKz2J93C94Ei4BvDop7P",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Sorry for Party Rocking"
//     }
//   ],
//   acoustic: [
//     {
//       id: "acoustic1",
//       name: "Ho Hey",
//       artist: "The Lumineers",
//       genre: "folk",
//       mood: "chill",
//       spotify_url: "https://open.spotify.com/track/0W4K6pX3YNI4VZ6eGlj6ON",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "The Lumineers"
//     },
//     {
//       id: "acoustic2",
//       name: "Riptide",
//       artist: "Vance Joy",
//       genre: "folk",
//       mood: "chill",
//       spotify_url: "https://open.spotify.com/track/3JvrhDOgAt6p7K8mDyZwRd",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Dream Your Life Away"
//     },
//     {
//       id: "acoustic3",
//       name: "Skinny Love",
//       artist: "Bon Iver",
//       genre: "folk",
//       mood: "sad",
//       spotify_url: "https://open.spotify.com/track/3B3eOgLJSqPEA0RfboIQ40",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "For Emma, Forever Ago"
//     },
//     {
//       id: "acoustic4",
//       name: "The A Team",
//       artist: "Ed Sheeran",
//       genre: "folk",
//       mood: "sad",
//       spotify_url: "https://open.spotify.com/track/1VdZ0vKfR5jneCmWIUAMxK",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "+ (Plus)"
//     },
//     {
//       id: "acoustic5",
//       name: "Little Talks",
//       artist: "Of Monsters and Men",
//       genre: "folk",
//       mood: "chill",
//       spotify_url: "https://open.spotify.com/track/2ihCaVdNZmnHZWt0fvAM7B",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "My Head Is An Animal"
//     },
//     {
//       id: "acoustic6",
//       name: "Home",
//       artist: "Edward Sharpe & The Magnetic Zeros",
//       genre: "folk",
//       mood: "happy",
//       spotify_url: "https://open.spotify.com/track/3ZQmGiZQwyvIEwH6av6niM",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Up from Below"
//     }
//   ],
//   dance: [
//     {
//       id: "dance1",
//       name: "Don't Start Now",
//       artist: "Dua Lipa",
//       genre: "pop",
//       mood: "dance",
//       spotify_url: "https://open.spotify.com/track/3PfIrDoz19wz7qK7tYeu62",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Future Nostalgia"
//     },
//     {
//       id: "dance2",
//       name: "Physical",
//       artist: "Dua Lipa",
//       genre: "pop",
//       mood: "dance",
//       spotify_url: "https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Future Nostalgia"
//     },
//     {
//       id: "dance3",
//       name: "Break My Heart",
//       artist: "Dua Lipa",
//       genre: "pop",
//       mood: "dance",
//       spotify_url: "https://open.spotify.com/track/017PF4Q3l4DBUiWoXk4OWT",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Future Nostalgia"
//     },
//     {
//       id: "dance4",
//       name: "New Rules",
//       artist: "Dua Lipa",
//       genre: "pop",
//       mood: "dance",
//       spotify_url: "https://open.spotify.com/track/2ekn2ttSfGqwhhate0LSR0",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Dua Lipa (Complete Edition)"
//     },
//     {
//       id: "dance5",
//       name: "IDGAF",
//       artist: "Dua Lipa",
//       genre: "pop",
//       mood: "confident",
//       spotify_url: "https://open.spotify.com/track/76cy1WJvNGJTj78UqeA5zr",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Dua Lipa (Complete Edition)"
//     },
//     {
//       id: "dance6",
//       name: "One Kiss",
//       artist: "Calvin Harris & Dua Lipa",
//       genre: "dance",
//       mood: "dance",
//       spotify_url: "https://open.spotify.com/track/7ef4DlsgrMEH11cDZd32M6",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "One Kiss"
//     }
//   ],
//   hiphop: [
//     {
//       id: "hiphop1",
//       name: "God's Plan",
//       artist: "Drake",
//       genre: "hiphop",
//       mood: "confident",
//       spotify_url: "https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Scorpion"
//     },
//     {
//       id: "hiphop2",
//       name: "In My Feelings",
//       artist: "Drake",
//       genre: "hiphop",
//       mood: "romantic",
//       spotify_url: "https://open.spotify.com/track/2GcVZPVO0IkUcCsOpdGpjd",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Scorpion"
//     },
//     {
//       id: "hiphop3",
//       name: "HUMBLE.",
//       artist: "Kendrick Lamar",
//       genre: "hiphop",
//       mood: "confident",
//       spotify_url: "https://open.spotify.com/track/7KXjTSCq5nL1LoYtL7XAwS",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "DAMN."
//     },
//     {
//       id: "hiphop4",
//       name: "SICKO MODE",
//       artist: "Travis Scott",
//       genre: "hiphop",
//       mood: "energetic",
//       spotify_url: "https://open.spotify.com/track/2xLMifQCjDGFmkHkpNLD9h",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "ASTROWORLD"
//     },
//     {
//       id: "hiphop5",
//       name: "Old Town Road",
//       artist: "Lil Nas X",
//       mood: "happy",
//       spotify_url: "https://open.spotify.com/track/0Fyqa4i3Z8gZuo2qUfJ4Qf",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "7"
//     },
//     {
//       id: "hiphop6",
//       name: "The Box",
//       artist: "Roddy Ricch",
//       genre: "hip-hop",
//       mood: "confident",
//       spotify_url: "https://open.spotify.com/track/0nbXyq5TXYPCO7pr3N8S4I",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Please Excuse Me for Being Antisocial"
//     }
//   ],
//   rock: [
//     {
//       id: "rock1",
//       name: "Bohemian Rhapsody",
//       artist: "Queen",
//       genre: "rock",
//       mood: "epic",
//       spotify_url: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "A Night At The Opera"
//     },
//     {
//       id: "rock2",
//       name: "Sweet Child O' Mine",
//       artist: "Guns N' Roses",
//       genre: "rock",
//       mood: "romantic",
//       spotify_url: "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnuZWg",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Appetite For Destruction"
//     },
//     {
//       id: "rock3",
//       name: "Stairway to Heaven",
//       artist: "Led Zeppelin",
//       genre: "rock",
//       mood: "epic",
//       spotify_url: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Led Zeppelin IV"
//     },
//     {
//       id: "rock4",
//       name: "Hotel California",
//       artist: "Eagles",
//       genre: "rock",
//       mood: "mysterious",
//       spotify_url: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Hotel California"
//     },
//     {
//       id: "rock5",
//       name: "Wonderwall",
//       artist: "Oasis",
//       genre: "rock",
//       mood: "nostalgic",
//       spotify_url: "https://open.spotify.com/track/2CT3r93YuSHtm57mjxvjhH",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "(What's The Story) Morning Glory?"
//     },
//     {
//       id: "rock6",
//       name: "Smells Like Teen Spirit",
//       artist: "Nirvana",
//       genre: "rock",
//       mood: "angry",
//       spotify_url: "https://open.spotify.com/track/5ghIJDpPJ3UzPBAq2KQk4L",
//       image_url: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a2c4c5e5a5b5b",
//       album: "Nevermind"
//     }
//   ]
// };

// // Mood to genre mapping for better song selection
// const MOOD_TO_GENRES = {
//   chill: ["chill", "acoustic", "pop"],
//   party: ["party", "dance", "pop"],
//   acoustic: ["acoustic", "chill", "folk"],
//   dance: ["dance", "party", "pop"],
//   romantic: ["chill", "pop", "rnb"],
//   sad: ["chill", "acoustic", "pop"],
//   workout: ["hiphop", "rock", "dance"],
//   happy: ["pop", "party", "dance"],
//   confident: ["hiphop", "rock", "pop"],
//   energetic: ["dance", "rock", "pop"],
//   nostalgic: ["rock", "pop", "acoustic"],
//   epic: ["rock", "pop"],
//   mysterious: ["rock", "chill"],
//   angry: ["rock", "hiphop"]
// };

// export function getSongsByMood(moods = ["pop"], count = 6) {
//   console.log("🎵 Getting songs by mood:", moods);
  
//   const allSongs = [];
//   const usedIds = new Set();
  
//   // Get songs for each mood
//   moods.forEach(mood => {
//     const genres = MOOD_TO_GENRES[mood] || ["pop"];
//     genres.forEach(genre => {
//       const genreSongs = SONG_DATABASE[genre] || SONG_DATABASE.pop;
//       genreSongs.forEach(song => {
//         if (!usedIds.has(song.id)) {
//           allSongs.push(song);
//           usedIds.add(song.id);
//         }
//       });
//     });
//   });
  
//   // Shuffle and return requested number of songs
//   const shuffled = allSongs.sort(() => Math.random() - 0.5);
//   const result = shuffled.slice(0, count);
  
//   console.log("🎵 Returning", result.length, "songs for moods:", moods);
//   return result;
// }

// export function getSongsByGenre(genres = ["pop"], count = 6) {
//   console.log("🎵 Getting songs by genre:", genres);
  
//   const allSongs = [];
//   const usedIds = new Set();
  
//   genres.forEach(genre => {
//     const genreSongs = SONG_DATABASE[genre] || SONG_DATABASE.pop;
//     genreSongs.forEach(song => {
//       if (!usedIds.has(song.id)) {
//         allSongs.push(song);
//         usedIds.add(song.id);
//       }
//     });
//   });
  
//   const shuffled = allSongs.sort(() => Math.random() - 0.5);
//   const result = shuffled.slice(0, count);
  
//   console.log("🎵 Returning", result.length, "songs for genres:", genres);
//   return result;
// }

// export function getAllSongs() {
//   const allSongs = [];
//   Object.values(SONG_DATABASE).forEach(genreSongs => {
//     allSongs.push(...genreSongs);
//   });
//   return allSongs;
// }

