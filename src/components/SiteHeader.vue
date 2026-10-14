
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '../composables/useCart'

defineProps({
  user: {
    type: Object,
    default: null
  }
})

defineEmits(['logout'])

const route = useRoute()
const menuOpen = ref(false)
const { count } = useCart()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'CRUD Demo', to: '/manage-products' }
]
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <RouterLink to="/" class="brand" @click="menuOpen = false">
        <img
          src="/logo.png"
          alt="Flor Glass & Aluminum Works logo"
        >

        <span class="brand-text">
          <strong>FLOR GLASS</strong>
          <small>& ALUMINUM WORKS</small>
        </span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation"
        :aria-expanded="menuOpen"
      >
        ☰
      </button>

      <nav :class="{ 'nav-open': menuOpen }">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="{ active: route.path === link.to }"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </RouterLink>

        <RouterLink to="/cart" @click="menuOpen = false">
          Cart <span class="count">{{ count }}</span>
        </RouterLink>

        <template v-if="user">
          <span class="hello">Hi, {{ user.name }}</span>

          <button
            class="logout-btn"
            type="button"
            @click="$emit('logout'); menuOpen = false"
          >
            Log out
          </button>
        </template>

        <RouterLink
          v-else
          to="/login"
          class="login-link"
          @click="menuOpen = false"
        >
          Log in
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: #fff7ed;
  border-bottom: 1px solid #ead8c5;
  box-shadow: 0 3px 12px rgba(66, 42, 20, 0.08);
}

.header-inner {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  color: #292722;
  text-decoration: none;
}

.brand img {
  display: block;
  width: 54px;
  height: 54px;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  white-space: nowrap;
}

.brand-text strong {
  color: #c65e12;
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.brand-text small {
  color: #51483e;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.1px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;
}

nav a {
  color: #39332d;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease;
}

nav a:hover,
nav a.active {
  color: #d96d1c;
}

nav a.active {
  text-decoration: underline;
  text-underline-offset: 7px;
}

.count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  height: 21px;
  padding: 0 5px;
  border-radius: 50px;
  background: #e87924;
  color: #ffffff;
  font-size: 12px;
}

.hello {
  color: #51483e;
  font-size: 13px;
}

.logout-btn {
  padding: 9px 14px;
  border: 1px solid #d96d1c;
  border-radius: 8px;
  background: transparent;
  color: #c65e12;
  font-weight: 700;
  cursor: pointer;
}

.logout-btn:hover {
  background: #e87924;
  color: #ffffff;
}

nav a.login-link {
  padding: 10px 17px;
  border-radius: 8px;
  background: #e87924;
  color: #ffffff;
}

nav a.login-link:hover {
  background: #c65e12;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: #292722;
  font-size: 28px;
  cursor: pointer;
}

@media (max-width: 850px) {
  .header-inner {
    min-height: 72px;
    flex-wrap: wrap;
    gap: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .brand img {
    width: 46px;
    height: 46px;
  }

  .brand-text strong {
    font-size: 16px;
  }

  .brand-text small {
    font-size: 9px;
    letter-spacing: 0.7px;
  }

  .menu-toggle {
    display: block;
  }

  nav {
    display: none;
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    gap: 0;
    padding: 8px 0 12px;
  }

  nav.nav-open {
    display: flex;
  }

  nav a,
  .hello,
  .logout-btn {
    padding: 12px;
  }

  nav a.active {
    text-decoration: none;
    background: #f8e5d2;
    border-radius: 8px;
  }

  nav a.login-link {
    text-align: center;
  }

  .logout-btn {
    text-align: left;
  }
}

@media (max-width: 360px) {
  .brand {
    gap: 7px;
  }

  .brand img {
    width: 38px;
    height: 38px;
  }

  .brand-text strong {
    font-size: 14px;
  }

  .brand-text small {
    font-size: 8px;
  }
}
</style>
