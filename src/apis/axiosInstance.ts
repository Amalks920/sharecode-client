// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000, // Optional: Request timeout in milliseconds
});

export default axiosInstance;
