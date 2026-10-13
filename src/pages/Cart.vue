
<script setup>
import { useCart } from '../composables/useCart'
import { formatPrice } from '../data/products'

const {
  items,
  count,
  total,
  changeQuantity,
  remove,
  clear
} = useCart()
</script>

<template>
  <section class="page-hero compact">
    <div class="container">
      <span class="eyebrow">YOUR SELECTION</span>

      <h1>Shopping cart</h1>

      <p>
        Review your selected materials before sending an inquiry.
      </p>
    </div>
  </section>

  <section class="container cart-layout">
    <div v-if="items.length" class="cart-items">
      <article
        v-for="item in items"
        :key="item.id"
        class="cart-item"
      >
        <img
          :src="item.image"
          :alt="item.name"
        />

        <div class="cart-item-info">
          <strong>{{ item.name }}</strong>

          <span>
            {{ formatPrice(item.price) }} each
          </span>

          <div class="quantity">
            <button
              @click="changeQuantity(item.id, -1)"
            >
              −
            </button>

            <span>{{ item.quantity }}</span>

            <button
              @click="changeQuantity(item.id, 1)"
            >
              ＋
            </button>
          </div>
        </div>

        <div class="cart-item-total">
          {{ formatPrice(item.price * item.quantity) }}

          <button
            class="remove-btn"
            @click="remove(item.id)"
          >
            Remove
          </button>
        </div>
      </article>

      <button
        class="text-link"
        @click="clear"
      >
        Clear cart
      </button>
    </div>

    <div
      v-else
      class="empty-state cart-empty"
    >
      <h2>Your cart is empty</h2>

      <p>
        Explore the catalog and add products to get started.
      </p>

      <RouterLink
        to="/products"
        class="btn btn-dark"
      >
        Browse products
      </RouterLink>
    </div>

    <aside
      v-if="items.length"
      class="summary-card"
    >
      <h2>Order summary</h2>

      <div>
        <span>Items</span>
        <strong>{{ count }}</strong>
      </div>

      <div>
        <span>Estimated subtotal</span>
        <strong>{{ formatPrice(total) }}</strong>
      </div>

      <p>
        Shipping, customization, and final material
        specifications will be confirmed by our team.
      </p>

      <RouterLink
        to="/contact"
        class="btn btn-dark full-width"
      >
        Request a quote ↗
      </RouterLink>
    </aside>
  </section>
</template>