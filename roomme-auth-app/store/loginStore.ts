'use client'; // Ensure this file is treated as a client-side module
import { create } from 'zustand';

interface LoginState {
  email: string;
  password: string;
  error: string;
  loading: boolean;
  isAuthenticated: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const useLoginStore = create<LoginState>((set) => ({
  email: '',
  password: '',
  error: '',
  loading: false,
  isAuthenticated: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  login: async (email, password) => {
    set({ loading: true, error: '' }); // Start loading and clear previous errors
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@visionexdigital.com.au' && password === 'password123') {
          document.cookie = 'isAuthenticated=true; path=/'; // Set the cookie
          set({ isAuthenticated: true, error: '', loading: false });
          resolve(true); // Resolve with success
        } else {
          set({ error: 'Invalid credentials', loading: false });
          resolve(false); // Resolve with failure
        }
      }, 1000); // Simulate API delay
    });
  },
  logout: () => {
    document.cookie = 'isAuthenticated=false; path=/'; // Clear the cookie
    set({ isAuthenticated: false, email: '', password: '', error: '', loading: false });
  },
}));

export default useLoginStore;
