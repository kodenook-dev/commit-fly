// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/ui', '@nuxt/eslint'],

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: false,
                quotes: 'single',
            },
        },
    },

    compatibilityDate: '2024-08-24',
})
