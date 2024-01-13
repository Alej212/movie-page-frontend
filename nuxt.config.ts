export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/sass/_default.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/sass/_fonts.scss" as *;`
        }
      }
    }
  },
  modules: ['nuxt-icon', '@pinia/nuxt','@pinia-plugin-persistedstate/nuxt', 'nuxt-swiper'],
  // swiper: {
  //   prefix: 'Swiper',
  //   styleLang: 'scss',
  //   modules: ['navigation', 'pagination'],
  // }
})
