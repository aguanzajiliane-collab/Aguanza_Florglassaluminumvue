
<script setup>
import { formatPrice } from '../data/products'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])
</script>

<template>
  <article class="product-card">
    <RouterLink
      :to="`/products/${product.id}`"
      class="product-image"
    >
      <img
        :src="product.image"
        :alt="product.name"
        loading="lazy"
      >
      <span>{{ product.badge }}</span>
    </RouterLink>

    <div class="product-body">
      <div class="meta">
        {{ product.category }}
        <span>★ {{ product.rating }}</span>
      </div>

      <RouterLink
        :to="`/products/${product.id}`"
        class="product-name"
      >
        {{ product.name }}
      </RouterLink>

      <p class="muted">{{ product.grade }}</p>

      <div class="product-bottom">
        <div class="product-price">
          <strong>{{ formatPrice(product.price) }}</strong>
          <small>{{ product.unit }}</small>
        </div>

        <button
          class="add-btn"
          @click="$emit('add-to-cart', product)"
          :aria-label="`Add ${product.name} to cart`"
          type="button"
        >
          <span class="plus-icon">＋</span>
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
}

.product-price {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
}

.plus-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  font-size: 24px;
}
</style>