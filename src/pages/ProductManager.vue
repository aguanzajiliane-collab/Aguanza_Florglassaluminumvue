<script setup>
import { computed, ref } from 'vue'
import { products as starterProducts, formatPrice } from '../data/products'
import { KEYS, readStorage, writeStorage } from '../utils/storage'

const saved = readStorage(KEYS.managedProducts, null)
const products = ref(Array.isArray(saved) ? saved : starterProducts.map(product => ({ ...product })))
const editingId = ref(null)
const feedback = ref('')
const form = ref(emptyForm())
const total = computed(() => products.value.length)

function emptyForm() { return { name: '', category: 'Glass', grade: '', price: '', unit: 'per sqm' } }
function persist() { writeStorage(KEYS.managedProducts, products.value) }
function saveProduct() {
  const item = { ...form.value, price: Number(form.value.price), id: editingId.value || `custom-${Date.now()}`, rating: 5, badge: 'New item', image: '/images/clear-glass.png', description: 'Added through the product CRUD demo.', specs: ['Confirm specifications before ordering'] }
  if (editingId.value) {
    const index = products.value.findIndex(product => product.id === editingId.value)
    if (index !== -1) products.value[index] = { ...products.value[index], ...item }
    feedback.value = 'Product updated.'
  } else {
    products.value.unshift(item)
    feedback.value = 'Product created.'
  }
  persist()
  cancelEdit()
}
function editProduct(product) {
  editingId.value = product.id
  form.value = { name: product.name, category: product.category, grade: product.grade, price: product.price, unit: product.unit }
  feedback.value = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function deleteProduct(id) {
  products.value = products.value.filter(product => product.id !== id)
  persist()
  if (editingId.value === id) cancelEdit()
  feedback.value = 'Product deleted.'
}
function cancelEdit() { editingId.value = null; form.value = emptyForm() }
</script>

<template>
  <section class="page-hero compact"><div class="container"><span class="eyebrow">CREATE · READ · UPDATE · DELETE</span><h1>Product manager</h1><p>Manage the demo catalog. Changes are stored in this browser with localStorage.</p></div></section>
  <section class="container section manager-layout">
    <form class="contact-form manager-form" @submit.prevent="saveProduct">
      <h2>{{ editingId ? 'Edit product' : 'Add a product' }}</h2>
      <label>Product name<input v-model.trim="form.name" required maxlength="80" placeholder="e.g. Laminated Glass"></label>
      <label>Category<select v-model="form.category"><option>Glass</option><option>Windows</option><option>Steel</option><option>Aluminum</option></select></label>
      <label>Grade or type<input v-model.trim="form.grade" required placeholder="e.g. Safety"></label>
      <div class="manager-fields"><label>Price (PHP)<input v-model.number="form.price" type="number" required min="1" step="1"></label><label>Unit<input v-model.trim="form.unit" required placeholder="per sqm"></label></div>
      <div class="manager-actions"><button class="btn btn-dark" type="submit">{{ editingId ? 'Save changes' : 'Create product' }}</button><button v-if="editingId" class="btn btn-secondary" type="button" @click="cancelEdit">Cancel</button></div>
      <p v-if="feedback" class="success-text" role="status">{{ feedback }}</p>
    </form>
    <div class="manager-table-wrap"><div class="manager-table-heading"><h2>Catalog records</h2><span>{{ total }} products</span></div>
      <div v-if="products.length" class="manager-table-scroll"><table class="manager-table"><thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Actions</th></tr></thead><tbody><tr v-for="product in products" :key="product.id"><td><strong>{{ product.name }}</strong><small>{{ product.grade }}</small></td><td>{{ product.category }}</td><td>{{ formatPrice(product.price) }}<small>{{ product.unit }}</small></td><td class="manager-row-actions"><button type="button" @click="editProduct(product)">Edit</button><button type="button" class="delete-action" @click="deleteProduct(product.id)">Delete</button></td></tr></tbody></table></div>
      <p v-else class="empty-state">No products yet. Add one using the form.</p>
      <p class="fine-print">Changes are saved to this browser only. They do not update a server or the storefront catalog.</p>
    </div>
  </section>
</template>
