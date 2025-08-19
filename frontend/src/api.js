import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export const analyzePhoto = (formData) =>
  axios.post(`${API_BASE}/analyze-photo`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
