
<script setup>
import { ref } from 'vue'
import {
  KEYS,
  readStorage,
  writeStorage
} from '../utils/storage'

const form = ref({
  name: '',
  email: '',
  topic: 'Product inquiry',
  message: ''
})

const sent = ref(false)
const error = ref('')

function submit() {
  if (
    !form.value.name.trim() ||
    !form.value.email.includes('@') ||
    !form.value.message.trim()
  ) {
    error.value =
      'Please complete your name, valid email, and message.'
    return
  }

  const list = readStorage(KEYS.inquiries, [])

  list.push({
    ...form.value,
    createdAt: new Date().toISOString()
  })

  writeStorage(KEYS.inquiries, list)

  sent.value = true
  error.value = ''
}

function resetForm() {
  form.value = {
    name: '',
    email: '',
    topic: 'Product inquiry',
    message: ''
  }

  sent.value = false
  error.value = ''
}
</script>

<template>
  <section class="page-hero compact">
    <div class="container">
      <span class="eyebrow">LET'S TALK MATERIALS</span>

      <h1>How can we help?</h1>

      <p>
        Send a product question or tell us a little about
        your project.
      </p>
    </div>
  </section>

  <section class="container contact-layout section">
    <div class="contact-intro">
      <h2>Start a conversation.</h2>

      <p>
        Share product names, approximate dimensions, or the
        type of project you're planning. We'll have a clearer
        starting point for your inquiry.
      </p>

      <div class="contact-note">
        <strong>Need a custom size?</strong>

        <span>
          Include dimensions and preferred finish in your message.
        </span>
      </div>

      <p class="fine-print">
        This demo saves inquiries only in your browser.
        It does not send email or contact a live business.
      </p>
    </div>

    <form
      class="contact-form"
      @submit.prevent="submit"
    >
      <div
        v-if="sent"
        class="success-panel"
      >
        <strong>Inquiry saved.</strong>

        <p>
          Your demo inquiry was saved to this browser's
          local storage.
        </p>

        <button
          type="button"
          class="text-link"
          @click="resetForm"
        >
          Send another
        </button>
      </div>

      <template v-else>
        <label>
          Your name

          <input
            v-model="form.name"
            required
            placeholder="Full name"
          />
        </label>

        <label>
          Email address

          <input
            v-model="form.email"
            required
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label>
          Inquiry type

          <select v-model="form.topic">
            <option>Product inquiry</option>
            <option>Custom dimensions</option>
            <option>Bulk order</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Message

          <textarea
            v-model="form.message"
            rows="5"
            required
            placeholder="Tell us what you're looking for..."
          ></textarea>
        </label>

        <p
          v-if="error"
          class="error-text"
        >
          {{ error }}
        </p>

        <button
          type="submit"
          class="btn btn-dark full-width"
        >
          Save inquiry →
        </button>
      </template>
    </form>
  </section>
</template>