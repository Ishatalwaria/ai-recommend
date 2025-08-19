// Map raw DeepAI tags -> broader moods
export function mapTagsToMoods(tags = []) {
  const t = new Set(tags.map((x) => x.toLowerCase()));
  const moods = new Set();

  const addIf = (cond, mood) => { if (cond) moods.add(mood); };

  addIf(hasAny(t, ["beach", "sea", "ocean", "sunset", "sunrise", "sand"]), "chill");
  addIf(hasAny(t, ["smile", "friends", "party", "dance", "concert", "crowd"]), "party");
  addIf(hasAny(t, ["mountain", "forest", "hiking", "nature", "tree", "river"]), "acoustic");
  addIf(hasAny(t, ["city", "night", "lights", "neon"]), "dance");
  addIf(hasAny(t, ["book", "coffee", "desk", "indoors", "minimal"]), "chill");
  addIf(hasAny(t, ["heart", "couple", "rose", "kiss"]), "romance");
  addIf(hasAny(t, ["rain", "dark", "alone", "street"]), "sad");
  addIf(hasAny(t, ["sports", "run", "gym", "bike", "car"]), "workout");

  // Always ensure at least one
  if (moods.size === 0) moods.add("pop");
  return [...moods];
}

function hasAny(tagSet, arr) {
  return arr.some((x) => tagSet.has(x));
}

// Map moods -> Spotify seed genres (validated later against Spotify list)
export function pickSeedGenres(moods = []) {
  const genres = new Set();
  moods.forEach((mood) => {
    const moodGenres = MOOD_TO_GENRES[mood] || [];
    moodGenres.forEach((g) => genres.add(g));
  });
  return [...genres];
}

const MOOD_TO_GENRES = {
  chill: ["chill", "ambient", "lo-fi", "sleep", "acoustic", "indie-pop"],
  party: ["dance", "house", "edm", "party", "pop"],
  acoustic: ["acoustic", "folk", "singer-songwriter", "indie-folk"],
  dance: ["dance", "edm", "electro", "house"],
  romance: ["romance", "rnb", "soul", "love-songs", "acoustic"],
  sad: ["sad", "piano", "emo", "acoustic", "lo-fi"],
  workout: ["workout", "hip-hop", "trap", "rock", "edm"],
  pop: ["pop", "indie-pop", "electropop"]
};

export { MOOD_TO_GENRES };
