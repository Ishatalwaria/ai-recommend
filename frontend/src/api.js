import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export const analyzePhoto = async (formData) => {
  const response = await axios.post(`${API_BASE}/analyze-photo`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const getTestData = async () => {
  const response = await axios.get(`${API_BASE}/analyze-photo/test-data`);
  return response.data;
};
