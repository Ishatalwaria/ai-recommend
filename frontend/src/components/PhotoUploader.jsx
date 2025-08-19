import React, { useState } from 'react';
import { analyzePhoto } from '../api';
import { FaUpload } from 'react-icons/fa';

const PhotoUploader = ({ setResults }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert('Please select a photo');
    const formData = new FormData();
    formData.append('photo', file);

    setLoading(true);
    try {
      const { data } = await analyzePhoto(formData);
      setResults(data);
    } catch (err) {
      console.error(err);
      alert('Error analyzing photo');
    }
    setLoading(false);
  };

  return (
    <div className="text-center my-4 p-4 shadow rounded" style={{background: 'linear-gradient(120deg, #ffe6e6, #fff0f5)'}}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="form-control mb-3"
      />
      <button
        onClick={handleUpload}
        className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
        disabled={loading}
      >
        {loading ? 'Analyzing...' : <><FaUpload className="me-2"/> Upload & Analyze</>}
      </button>
    </div>
  );
};

export default PhotoUploader;
