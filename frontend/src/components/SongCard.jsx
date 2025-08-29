import React, { useState } from 'react';

const SongCard = ({ song, index }) => {
  const [isCopied, setIsCopied] = useState(false);

  console.log('🎵 SongCard received song:', song, 'at index:', index);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${song.name} by ${song.artist}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSpotifyClick = () => {
    if (song.external_url) {
      window.open(song.external_url, '_blank');
    }
  };
  return (
    <div 
      className="song-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="song-image-container">
        {song.album_image ? (
          <img src={song.album_image} alt={song.name} className="song-image" />
        ) : (
          <div className="song-placeholder">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18V5L21 3V16M9 18C9 19.1046 8.10457 20 7 20C5.89543 20 5 19.1046 5 18C5 16.8954 5.89543 16 7 16C8.10457 16 9 16.8954 9 18ZM21 16C21 17.1046 20.1046 18 19 18C17.8954 18 17 17.1046 17 16C17 14.8954 17.8954 14 19 14C20.1046 14 21 14.8954 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        <div className="song-overlay">
          <button className="play-button" onClick={handleSpotifyClick}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="song-content">
        <div className="song-info">
          <h3 className="song-title">{song.name}</h3>
          <p className="song-artist">{song.artist}</p>
          {song.album && <p className="song-album">{song.album}</p>}
        </div>
        
        <div className="song-actions">
          <button 
            className="spotify-button"
            onClick={handleSpotifyClick}
            title="Listen on Spotify"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 16.5C16.3 16.7 15.9 16.8 15.6 16.6C13.4 15.4 10.6 15.4 8.4 16.6C8.1 16.8 7.7 16.7 7.5 16.5C7.3 16.3 7.2 15.9 7.4 15.6C9.8 14.2 12.2 14.2 14.6 15.6C14.8 15.9 14.7 16.3 14.5 16.5ZM18.5 13.5C18.2 13.8 17.6 13.9 17.2 13.6C14.2 11.8 9.8 11.8 6.8 13.6C6.4 13.9 5.8 13.8 5.5 13.5C5.2 13.2 5.1 12.6 5.4 12.2C9.2 9.8 14.8 9.8 18.6 12.2C18.9 12.6 18.8 13.2 18.5 13.5Z" fill="currentColor"/>
            </svg>
            Listen
          </button>
          
          <button 
            className={`copy-button ${isCopied ? 'copied' : ''}`}
            onClick={handleCopy}
            title="Copy song info"
          >
            {isCopied ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4V16C8 17.1046 8.89543 18 10 18H18C19.1046 18 20 17.1046 20 16V7.24264C20 6.97742 19.8946 6.7228 19.7071 6.53553L16.4645 3.29289C16.2772 3.10536 16.0226 3 15.7574 3H10C8.89543 3 8 3.89543 8 5ZM6 7V5C6 3.89543 6.89543 3 8 3H10M8 7H16M8 11H16M8 15H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        {/* Optional: Preview snippet */}
        {song.preview_url && (
          <audio controls src={song.preview_url} className="song-preview" />
        )}
      </div>
    </div>
  );
};

export default SongCard;
