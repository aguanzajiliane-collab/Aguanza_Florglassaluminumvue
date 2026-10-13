
<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'
import { useCart } from '../composables/useCart'
import ProductCard from '../components/ProductCard.vue'
import NoticeToast from '../components/NoticeToast.vue'

const search = ref('')
const category = ref('All')
const { add } = useCart()
const notice = ref('')

let timer

const categories = [
  'All',
  ...new Set(products.map(product => product.category))
]

const filtered = computed(() =>
  products.filter(product => {
    const matchesCategory =
      category.value === 'All' ||
      product.category === category.value

    const searchText =
      `${product.name} ${product.category} ${product.grade}`

    const matchesSearch = searchText
      .toLowerCase()
      .includes(search.value.toLowerCase().trim())

    return matchesCategory && matchesSearch
  })
)

function addToCart(product) {
  add(product)

  notice.value = `${product.name} added to cart`

  clearTimeout(timer)

  timer = setTimeout(() => {
    notice.value = ''
  }, 2200)
}
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">THE PRODUCT COLLECTION</span>

      <h1>
        Materials for your
        <br />
        <em>next big idea.</em>
      </h1>

      <p>
        Explore glass colors, aluminum windows, jalousie,
        and steel essentials for your next project.
      </p>
    </div>
  </section>

  <section class="container section">
    <div class="catalog-tools">
      <label class="search-box">
        <span>⌕</span>

        <input
          v-model="search"
          placeholder="Search products..."
          aria-label="Search products"
        />
      </label>

      <div class="filter-tabs">
        <button
          v-for="item in categories"
          :key="item"
          :class="{ selected: category === item }"
          @click="category = item"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <div class="results-line">
      {{ filtered.length }} products

      <span>
        Prices are indicative; confirm sizes and final quote
        before purchase.
      </span>
    </div>

    <div v-if="filtered.length" class="product-grid">
      <ProductCard
        v-for="product in filtered"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>

    <div v-else class="empty-state">
      <h3>No matching products</h3>

      <p>Try a different search or category.</p>

      <button
        class="btn btn-dark"
        @click="search = ''; category = 'All'"
      >
        Clear filters
      </button>
    </div>
  </section>

  <NoticeToast :message="notice" />
</template>