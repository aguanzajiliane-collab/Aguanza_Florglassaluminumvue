
<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { products, formatPrice } from '../data/products'
import { useCart } from '../composables/useCart'

const route = useRoute()

const product = computed(() =>
  products.find(p => p.id === route.params.id)
)

const { add } = useCart()

const quantity = ref(1)
const notice = ref('')

function addProduct() {
  if (!product.value) return

  for (let i = 0; i < quantity.value; i++) {
    add(product.value)
  }

  notice.value = 'Added to your cart.'
}
</script>

<template>
  <section
    v-if="product"
    class="container detail-layout"
  >
    <div class="detail-image">
      <img
        :src="product.image"
        :alt="product.name"
      />
    </div>

    <div class="detail-copy">
      <RouterLink
        to="/products"
        class="back-link"
      >
        ← Back to products
      </RouterLink>

      <span class="eyebrow">
        {{ product.category }} / {{ product.grade }}
      </span>

      <h1>{{ product.name }}</h1>

      <p class="detail-rating">
        ★ {{ product.rating }}
        <span>·</span>
        {{ product.badge }}
      </p>

      <div class="detail-price">
        {{ formatPrice(product.price) }}
        <small>{{ product.unit }}</small>
      </div>

      <p class="detail-description">
        {{ product.description }}
      </p>

      <h3>Product details</h3>

      <ul class="spec-list">
        <li
          v-for="spec in product.specs"
          :key="spec"
        >
          {{ spec }}
        </li>
      </ul>

      <div class="purchase-row">
        <div class="quantity">
          <button
            @click="quantity = Math.max(1, quantity - 1)"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span>{{ quantity }}</span>

          <button
            @click="quantity++"
            aria-label="Increase quantity"
          >
            ＋
          </button>
        </div>

        <button
          class="btn btn-dark"
          @click="addProduct"
        >
          Add to cart ↗
        </button>
      </div>

      <p
        v-if="notice"
        class="success-text"
        role="status"
      >
        {{ notice }}
      </p>

      <p class="fine-print">
        Product specifications and final pricing may vary
        by requested dimensions. Please confirm details
        before purchase.
      </p>
    </div>
  </section>

  <section
    v-else
    class="container empty-state"
  >
    <h2>Product not found</h2>

    <RouterLink
      to="/products"
      class="btn btn-dark"
    >
      Browse products
    </RouterLink>
  </section>
</template>