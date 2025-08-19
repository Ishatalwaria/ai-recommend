import React, { useState } from 'react';
import PhotoUploader from './components/PhotoUploader';
import CaptionList from './components/CaptionList';
import BioList from './components/BioList';
import SongCard from './components/SongCard';

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{fontWeight: 700, color:'#ff6a00'}}>Photo Vibe Recommender</h1>
      <PhotoUploader setResults={setResults} />
      {results && (
        <>
          <CaptionList captions={results.captions} />
          <BioList bios={results.bios} />
          <SongCard songs={results.songs} />
        </>
      )}
    </div>
  );
};

export default App;
