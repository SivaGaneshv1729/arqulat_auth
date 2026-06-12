import axios from 'axios';

// Assuming backend is running on a specific port, maybe 8080.
// We can use Vite's proxy later, but for now we'll point to localhost:8080
const API_URL = 'http://localhost:8080/api/auth';

export const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};
