
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { logout } = useAuth()

onMounted(() => {
  logout()

  setTimeout(() => {
    router.replace('/login')
  }, 700)
})
</script>

<template>
  <section class="logout-page">
    <div class="login-card">
      <span class="logout-mark">✓</span>

      <h1>You're logged out.</h1>

      <p>
        Your local session has been cleared from this browser.
      </p>

      <RouterLink
        to="/login"
        class="btn btn-dark full-width"
      >
        Log in again
      </RouterLink>

      <RouterLink
        to="/"
        class="back-link"
      >
        Return to home
      </RouterLink>
    </div>
  </section>
</template>