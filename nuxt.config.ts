// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // This gets overriden by module
    css: [
        '~/assets/main.scss'
    ],
    modules: [
        '@fedorae/nuxt-uikit'
    ],
})
