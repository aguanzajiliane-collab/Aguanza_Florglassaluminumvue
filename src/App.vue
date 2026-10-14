
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import { useAuth } from './composables/useAuth'

const route = useRoute()
const router = useRouter()

const { user, logout } = useAuth()

const showHeader = computed(() => {
  return route.name !== 'Login'
})

function signOut() {
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="app-shell">
    <SiteHeader
      v-if="showHeader"
      :user="user"
      @logout="signOut"
    />

    <main>
      <RouterView />
    </main>

    <footer
      v-if="showHeader"
      class="footer"
    >
      <div class="container footer-inner">
        <span>
          © {{ new Date().getFullYear() }}
          Flor Glass & Aluminum Works
        </span>

        <span>
          Quality materials for better spaces.
        </span>
      </div>
    </footer>
  </div>
</template>
