import React, { useState } from 'react';
import './App.css';
import PhotoUploader from './components/PhotoUploader';
import CaptionList from './components/CaptionList';
import BioList from './components/BioList';
import SongCard from './components/SongCard';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('captions');

  const handleAnalysisComplete = (result) => {
    console.log('📊 App received analysis result:', result);
    setAnalysisResult(result);
    setIsLoading(false);
  };

  const handleAnalysisStart = () => {
    setIsLoading(true);
  };

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 3}s`,
              '--duration': `${2 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                <path d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z" fill="currentColor"/>
                <path d="M5 6L5.5 7.5L7 8L5.5 8.5L5 10L4.5 8.5L3 8L4.5 7.5L5 6Z" fill="currentColor"/>
              </svg>
            </div>
            <h1 className="app-title">
              <span className="title-main">Vibely</span>
              <span className="title-sub">Recommend</span>
            </h1>
          </div>
          <p className="app-subtitle">Transform your photos into personalized music recommendations</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <div className="content-container">
          {/* Upload Section */}
          <section className="upload-section">
            <PhotoUploader 
              onAnalysisStart={handleAnalysisStart}
              onAnalysisComplete={handleAnalysisComplete}
            />
          </section>

          {/* Results Section */}
          {analysisResult && (
            <section className="results-section">
              <div className="results-header">
                <h2 className="results-title">Your Personalized Recommendations</h2>
                <div className="tab-navigation">
                  <button 
                    className={`tab-button ${activeTab === 'captions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('captions')}
                  >
                    <span className="tab-icon">📝</span>
                    Captions
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'bios' ? 'active' : ''}`}
                    onClick={() => setActiveTab('bios')}
                  >
                    <span className="tab-icon">👤</span>
                    Bios
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'songs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('songs')}
                  >
                    <span className="tab-icon">🎵</span>
                    Songs
                  </button>
                </div>
              </div>

              <div className="results-content">
                {activeTab === 'captions' && (
                  <div className="tab-content captions-tab">
                    <CaptionList captions={analysisResult.captions} />
                  </div>
                )}
                
                {activeTab === 'bios' && (
                  <div className="tab-content bios-tab">
                    <BioList bios={analysisResult.bios} />
                  </div>
                )}
                
                {activeTab === 'songs' && (
                  <div className="tab-content songs-tab">
                    <div className="songs-grid">
                      {analysisResult.songs?.map((song, index) => (
                        <SongCard key={song.id || index} song={song} index={index} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-container">
                <div className="loading-spinner">
                  <div className="spinner-ring"></div>
                  <div className="spinner-ring"></div>
                  <div className="spinner-ring"></div>
                </div>
                <p className="loading-text">Analyzing your photo...</p>
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>Vibely • Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
