// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        'yoda': 'error',
        'vars-on-top': 'error',
        'no-var': 'error',
        'eqeqeq': 'error',
    },
})
