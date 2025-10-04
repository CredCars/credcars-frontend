<template>
  <div>
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <RouterLink to="/" class="nav-link">CredCars</RouterLink>
        </div>
        <div class="nav-links">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink v-if="!authStore.isAuthenticated" to="/login" class="nav-link"
            >Login</RouterLink
          >
          <RouterLink v-if="!authStore.isAuthenticated" to="/register" class="nav-link"
            >Register</RouterLink
          >
          <button v-if="authStore.isAuthenticated" @click="handleLogout" class="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </nav>
    <RouterView />
    <footer class="app-footer">Vue 3 + Vite + TS • Pinia • Router</footer>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
};
</script>

<style scoped>
.navbar {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand .nav-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #667eea;
}

.logout-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.logout-btn:hover {
  background: #c0392b;
}

.app-footer {
  margin-top: 2rem;
  color: #888;
  font-size: 0.875rem;
  text-align: center;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }
}
</style>
