import { defineStore } from 'pinia';
import api from '../services/api';

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || null,
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    currentUser: (state) => state.user
  },

  actions: {
    async login(credentials: LoginCredentials) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await api.post('/auth/login', credentials);

        const { token, user } = response.data;

        this.token = token;
        this.user = user;

        // Store token in localStorage
        localStorage.setItem('token', token);

        return { success: true };
      } catch (error: any) {
        this.error = error.response?.data?.message || 'Login failed. Please try again.';
        return { success: false, error: this.error };
      } finally {
        this.isLoading = false;
      }
    },

    async register(credentials: RegisterCredentials) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await api.post('/auth/register', credentials);

        const { token, user } = response.data;

        this.token = token;
        this.user = user;

        // Store token in localStorage
        localStorage.setItem('token', token);

        return { success: true };
      } catch (error: any) {
        this.error = error.response?.data?.message || 'Registration failed. Please try again.';
        return { success: false, error: this.error };
      } finally {
        this.isLoading = false;
      }
    },

    async logout() {
      this.user = null;
      this.token = null;
      this.error = null;

      // Remove token from localStorage
      localStorage.removeItem('token');
    },

    async checkAuth() {
      if (this.token) {
        try {
          // Verify token with backend
          const response = await api.get('/auth/me');

          this.user = response.data.user;
          return true;
        } catch (error) {
          // Token is invalid, logout
          this.logout();
          return false;
        }
      }
      return false;
    }
  }
});
