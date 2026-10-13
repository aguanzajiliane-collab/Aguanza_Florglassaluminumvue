
<template>
  <section class="not-found">
    <div class="not-found-content">
      <span class="error-code">404</span>

      <p class="eyebrow">PAGE NOT FOUND</p>

      <h1>Oops! Wrong <em>turn.</em></h1>

      <p class="description">
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back to exploring our products.
      </p>

      <div class="actions">
        <RouterLink to="/" class="btn btn-dark">
          ← Back to Home
        </RouterLink>

        <RouterLink to="/products" class="back-link">
          Browse Products ↗
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  background: #f7f7f3;
  text-align: center;
}

.not-found-content {
  max-width: 520px;
}

.error-code {
  display: block;
  color: #f26b21;
  font-size: clamp(90px, 18vw, 150px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -8px;
}

.eyebrow {
  margin-top: 24px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #777e75;
}

h1 {
  color: #252923;
  font-size: clamp(32px, 6vw, 48px);
  margin: 16px 0;
}

h1 em {
  color: #f26b21;
  font-family: Georgia, serif;
  font-weight: 400;
}

.description {
  color: #747a72;
  font-size: 14px;
  line-height: 1.8;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 28px;
}

.btn-dark {
  display: inline-block;
  background: #252923;
  color: white;
  padding: 13px 18px;
  text-decoration: none;
  font-size: 12px;
}

.back-link {
  color: #252923;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}
</style>