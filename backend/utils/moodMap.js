// // Map raw Hugging Face tags -> broader moods
// export function mapTagsToMoods(tags = []) {
//   const t = new Set(tags.map((x) => x.toLowerCase()));
//   const moods = new Set();

//   const addIf = (cond, mood) => { if (cond) moods.add(mood); };

//   // Person and human-related tags
//   addIf(hasAny(t, ["person", "people", "human", "man", "woman", "boy", "girl", "child", "adult"]), "pop");
//   addIf(hasAny(t, ["face", "portrait", "selfie", "smile", "laughing", "happy"]), "happy");
//   addIf(hasAny(t, ["sad", "crying", "tears", "frown"]), "sad");
  
//   // Social and activity tags
//   addIf(hasAny(t, ["friends", "group", "party", "dance", "concert", "crowd", "celebration"]), "party");
//   addIf(hasAny(t, ["couple", "romance", "love", "heart", "rose", "kiss", "wedding"]), "romance");
//   addIf(hasAny(t, ["sports", "run", "gym", "bike", "car", "exercise", "fitness", "workout"]), "workout");
  
//   // Nature and outdoor tags
//   addIf(hasAny(t, ["beach", "sea", "ocean", "sunset", "sunrise", "sand", "waves"]), "chill");
//   addIf(hasAny(t, ["mountain", "forest", "hiking", "nature", "tree", "river", "lake", "park"]), "acoustic");
//   addIf(hasAny(t, ["garden", "flower", "plant", "outdoor", "landscape"]), "chill");
  
//   // Urban and nightlife tags
//   addIf(hasAny(t, ["city", "night", "lights", "neon", "street", "urban", "building"]), "dance");
//   addIf(hasAny(t, ["club", "bar", "restaurant", "cafe", "coffee"]), "chill");
  
//   // Indoor and lifestyle tags
//   addIf(hasAny(t, ["book", "coffee", "desk", "indoors", "minimal", "home", "room", "bedroom"]), "chill");
//   addIf(hasAny(t, ["kitchen", "cooking", "food", "meal"]), "chill");
  
//   // Weather and mood tags
//   addIf(hasAny(t, ["rain", "dark", "alone", "street", "storm", "cloudy"]), "sad");
//   addIf(hasAny(t, ["sunny", "bright", "day", "light"]), "happy");
  
//   // Object and activity tags
//   addIf(hasAny(t, ["phone", "camera", "technology", "computer", "laptop"]), "pop");
//   addIf(hasAny(t, ["music", "instrument", "guitar", "piano", "singing"]), "acoustic");
//   addIf(hasAny(t, ["art", "painting", "creative", "design"]), "chill");
  
//   // Clothing and style tags
//   addIf(hasAny(t, ["fashion", "style", "clothing", "dress", "outfit"]), "pop");
//   addIf(hasAny(t, ["casual", "comfortable", "relaxed"]), "chill");
//   addIf(hasAny(t, ["formal", "elegant", "sophisticated"]), "romance");

//   // Always ensure at least one mood
//   if (moods.size === 0) moods.add("pop");
//   return [...moods];
// }

// function hasAny(tagSet, arr) {
//   return arr.some((x) => tagSet.has(x));
// }

// // Map moods -> Spotify seed genres (validated later against Spotify list)
// export function pickSeedGenres(moods = []) {
//   const genres = new Set();
//   moods.forEach((mood) => {
//     const moodGenres = MOOD_TO_GENRES[mood] || [];
//     moodGenres.forEach((g) => genres.add(g));
//   });
//   return [...genres];
// }

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

// export { MOOD_TO_GENRES };
// utils/moodMap.js

// Map raw Hugging Face tags -> broader moods
export function mapTagsToMoods(tags = []) {
  const t = new Set(tags.map((x) => x.toLowerCase()));
  const moods = new Set();

  const addIf = (cond, mood) => { if (cond) moods.add(mood); };

  // --- Emotion tags ---
  addIf(hasAny(t, ["happy", "joy", "smile", "laughing"]), "happy");
  addIf(hasAny(t, ["sad", "crying", "tears", "frown"]), "sad");
  addIf(hasAny(t, ["fear", "scared", "afraid", "anxious"]), "sad");
  addIf(hasAny(t, ["angry", "mad", "frustrated", "disgust"]), "rock");
  addIf(hasAny(t, ["surprise", "shocked", "wow"]), "dance");
  addIf(hasAny(t, ["neutral", "calm", "relaxed"]), "chill");

  // --- Background / scene tags ---
  addIf(hasAny(t, ["person", "people", "human", "man", "woman", "child"]), "pop");
  addIf(hasAny(t, ["friends", "group", "party", "dance", "concert", "crowd"]), "party");
  addIf(hasAny(t, ["couple", "romance", "love", "kiss", "wedding"]), "romance");
  addIf(hasAny(t, ["sports", "run", "gym", "exercise", "workout"]), "workout");

  addIf(hasAny(t, ["beach", "ocean", "sunset", "waves"]), "chill");
  addIf(hasAny(t, ["mountain", "forest", "hiking", "nature"]), "acoustic");
  addIf(hasAny(t, ["city", "street", "urban", "night", "lights"]), "dance");

  addIf(hasAny(t, ["book", "coffee", "indoors", "home"]), "chill");
  addIf(hasAny(t, ["rain", "dark", "alone", "storm", "cloudy"]), "sad");
  addIf(hasAny(t, ["sunny", "bright", "day"]), "happy");

  addIf(hasAny(t, ["fashion", "style", "outfit"]), "pop");
  addIf(hasAny(t, ["formal", "elegant", "sophisticated"]), "romance");

  // Always ensure at least one mood
  if (moods.size === 0) moods.add("pop");
  return [...moods];
}

function hasAny(tagSet, arr) {
  return arr.some((x) => tagSet.has(x));
}

// Map moods -> Spotify seed genres
export function pickSeedGenres(moods = []) {
  const genres = new Set();
  moods.forEach((mood) => {
    const moodGenres = MOOD_TO_GENRES[mood] || [];
    moodGenres.forEach((g) => genres.add(g));
  });
  return [...genres];
}

const MOOD_TO_GENRES = {
  chill: ["acoustic", "folk", "jazz"],
  party: ["pop", "hiphop", "electronic"],
  acoustic: ["acoustic", "folk", "indie"],
  dance: ["pop", "electronic", "hiphop"],
  romance: ["pop", "rnb", "jazz"],
  sad: ["acoustic", "folk", "piano"],
  workout: ["rock", "pop", "hiphop"],
  happy: ["pop", "electronic", "country"],
  rock: ["rock", "metal", "punk"],
  pop: ["pop", "rock", "hiphop", "rnb"]
};

export { MOOD_TO_GENRES };
