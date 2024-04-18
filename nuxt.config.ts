export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-icon'
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      langs: [
        'html',
        'scss'
      ]
    }
  },
  css: ['~/assets/scss/styles.scss']
});