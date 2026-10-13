
<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const email = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()
const route = useRoute()

const { login } = useAuth()

function submit() {
  const result = login(email.value, password.value)

  if (!result.ok) {
    error.value = result.message
    return
  }

  const redirect =
    typeof route.query.redirect === 'string'
      ? route.query.redirect
      : '/'

  router.push(redirect)
}
</script>

<template>
  <section class="login-page">
    <div class="login-card">
      <RouterLink
        to="/"
        class="login-brand"
      >
        <img
          src="/logo.png"
          alt="Flor Glass logo"
        />

        <span>Flor Glass & Aluminum Works</span>
      </RouterLink>

      <span class="eyebrow">WELCOME BACK</span>

      <h1>Log in to continue.</h1>

      <p>
        Sign in to keep your product selections handy.
      </p>

      <form @submit.prevent="submit">
        <label>
          Email address

          <input
            v-model.trim="email"
            type="email"
            autocomplete="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Password

          <input
            v-model="password"
            type="password"
            autocomplete="current-password"
            placeholder="Enter your password"
            minlength="4"
            required
          />
        </label>

        <p
          v-if="error"
          class="error-text"
          role="alert"
        >
          {{ error }}
        </p>

        <button
          class="btn btn-dark full-width"
          type="submit"
        >
          Log in →
        </button>
      </form>

      <p class="login-note">
        Demo frontend sign-in: enter any valid email and a
        password with at least 4 characters. This is not
        production authentication.
      </p>

      <RouterLink
        to="/"
        class="back-link"
      >
        ← Back to store
      </RouterLink>
    </div>
  </section>
</template>