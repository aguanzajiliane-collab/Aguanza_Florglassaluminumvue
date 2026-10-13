
<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { products } from '../data/products'
import { useCart } from '../composables/useCart'
import ProductCard from '../components/ProductCard.vue'
import NoticeToast from '../components/NoticeToast.vue'

const { add } = useCart()

const notice = ref('')
const featured = computed(() => products.slice(0, 4))

let timer

function addToCart(product) {
  add(product)

  notice.value = `${product.name} added to cart`

  clearTimeout(timer)

  timer = setTimeout(() => {
    notice.value = ''
  }, 2200)
}

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <main class="home-page">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="eyebrow">
            MATERIALS FOR BETTER SPACES
          </span>

          <h1>
            Strong materials.
            <br />
            <em>Lasting impressions.</em>
          </h1>

          <p class="hero-text">
            Explore quality glass and aluminum products
            for homes, businesses, and the people who
            build them.
          </p>

          <div class="actions">
            <RouterLink
              to="/products"
              class="btn btn-dark"
            >
              Shop products <span>→</span>
            </RouterLink>

            <RouterLink
              to="/about"
              class="text-link"
            >
              Discover our story →
            </RouterLink>
          </div>

          <div class="hero-note">
            <span>✓ Carefully selected materials</span>
            <span>✓ Made for real projects</span>
          </div>
        </div>

        <div class="hero-image">
          <img
            src="c:\Users\Jiliane Aguanza\Downloads\home.png"
            alt="Modern glass architecture and aluminum frames"
          />

          <div class="image-label">
            <strong>Quality you can build on.</strong>
            <span>Glass · Steel · Aluminum</span>
          </div>
        </div>
      </div>
    </section>

    <section class="benefits">
      <div class="container benefits-grid">
        <div class="benefit-item">
          <b>01</b>
          <strong>Quality materials</strong>
          <span>
            Options for residential and commercial projects.
          </span>
        </div>

        <div class="benefit-item">
          <b>02</b>
          <strong>Clear specifications</strong>
          <span>
            Know the material, grade, and unit before ordering.
          </span>
        </div>

        <div class="benefit-item">
          <b>03</b>
          <strong>Helpful service</strong>
          <span>
            Reach out for sizing and product inquiries.
          </span>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-heading">
        <div>
          <span class="eyebrow">OUR SELECTION</span>
          <h2>Popular products</h2>
          <p>
            Reliable essentials for your next project.
          </p>
        </div>

        <RouterLink
          to="/products"
          class="text-link"
        >
          View all products →
        </RouterLink>
      </div>

      <div class="product-grid">
        <ProductCard
          v-for="product in featured"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </section>

    <section class="cta-section">
      <div class="container cta-inner">
        <div>
          <span class="eyebrow">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>Let's find the right material.</h2>

          <p>
            Tell us what you're building and we'll help you
            start with the right questions.
          </p>
        </div>

        <RouterLink
          to="/contact"
          class="btn btn-light"
        >
          Contact us →
        </RouterLink>
      </div>
    </section>

    <NoticeToast :message="notice" />
  </main>
</template>