import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

export const fetchItems = async () => {
  // Simulated mock data response
  return Promise.resolve({
    data: [
      {
        id: 1,
        title: 'Sample Item 1',
        description: 'This is a description for the first sample item.'
      },
      {
        id: 2,
        title: 'Sample Item 2',
        description: 'This is a description for the second sample item.'
      },
      {
        id: 3,
        title: 'Sample Item 3',
        description: 'This is a description for the third sample item.'
      }
    ]
  });
};

export const signIn = async (credentials) => {
  try {
    const response = await api.post('/auth/signin', credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Invalid credentials');
  }
};

export const signUp = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export default api;