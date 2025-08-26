# Photo Vibe Recommender

An AI-powered application that analyzes photos and provides:
- Image analysis using HuggingFace
- Caption and bio generation using Google Gemini
- Music recommendations using Spotify

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the backend directory with the following variables:
   ```env
   # HuggingFace API Key (for image analysis)
   # Get from: https://huggingface.co/settings/tokens
   HF_API_KEY=your_huggingface_api_key_here

   # Google Gemini API Key (for caption and bio generation)
   # Get from: https://makersuite.google.com/app/apikey
   GEMINI_API_KEY=your_gemini_api_key_here

   # Spotify API Credentials (for music recommendations)
   # Get from: https://developer.spotify.com/dashboard
   SPOTIFY_CLIENT_ID=your_spotify_client_id_here
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here

   # CORS Origin (optional, defaults to "*")
   CORS_ORIGIN=http://localhost:5173

   # Port (optional, defaults to 5000)
   PORT=5000
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

## API Keys Required

### 1. HuggingFace API Key
- Go to [HuggingFace Settings](https://huggingface.co/settings/tokens)
- Create a new token
- Add it to your `.env` file as `HF_API_KEY`

### 2. Google Gemini API Key
- Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
- Create a new API key
- Add it to your `.env` file as `GEMINI_API_KEY`

### 3. Spotify API Credentials
- Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
- Create a new app
- Get the Client ID and Client Secret
- Add them to your `.env` file as `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`

## How It Works

1. **Photo Upload**: User uploads a photo through the frontend
2. **Image Analysis**: HuggingFace analyzes the image to detect objects and scenes
3. **Mood Mapping**: The detected tags are mapped to musical moods
4. **Content Generation**: Gemini generates captions and bios based on the image and tags
5. **Music Recommendations**: Spotify provides music recommendations based on the moods

## Troubleshooting

### Common Issues

1. **"Error analyzing photo"**
   - Check that all API keys are properly set in the `.env` file
   - Ensure the backend server is running on port 5000
   - Check browser console for detailed error messages

2. **Frontend crypto error**
   - This has been fixed in the current version
   - If you still see it, try clearing node_modules and reinstalling

3. **CORS errors**
   - Make sure the backend CORS_ORIGIN is set correctly
   - Default should work for localhost development

4. **API rate limits**
   - HuggingFace, Gemini, and Spotify all have rate limits
   - Check your API usage in their respective dashboards

### File Structure
```
ai-recommend/
├── backend/
│   ├── controllers/
│   │   └── analyzeController.js
│   ├── routes/
│   │   ├── analyze.js
│   │   ├── geminiRoutes.js
│   │   ├── huggingfaceRoutes.js
│   │   └── spotifyRoutes.js
│   ├── services/
│   │   ├── gemini.js
│   │   ├── huggingface.js
│   │   └── spotify.js
│   ├── utils/
│   │   └── moodMap.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── PhotoUploader.jsx
    │   │   ├── CaptionList.jsx
    │   │   ├── BioList.jsx
    │   │   └── SongCard.jsx
    │   ├── App.jsx
    │   └── api.js
    └── package.json
```

## Features

- **Image Analysis**: Uses HuggingFace's DETR model for object detection
- **AI Content Generation**: Gemini 1.5 Flash for creative captions and bios
- **Music Recommendations**: Spotify API integration for mood-based music
- **Modern UI**: React with Bootstrap for a clean, responsive interface
- **Error Handling**: Comprehensive error handling and user feedback

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React, Vite, Bootstrap
- **AI Services**: HuggingFace, Google Gemini
- **Music API**: Spotify Web API
- **File Upload**: Multer
