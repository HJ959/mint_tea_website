import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        requestAnimationFrame: 'readonly',
        setTimeout: 'readonly',
        Promise: 'readonly',
        AudioContext: 'readonly',
        Uint8Array: 'readonly',
        AnalyserNode: 'readonly',
        BiquadFilterNode: 'readonly',
        URL: 'readonly',
        location: 'readonly',
        self: 'readonly',
        caches: 'readonly',
        fetch: 'readonly',
        // Window-exposed functions
        showCat: 'writable',
        showAbout: 'writable',
        catCycleNext: 'writable',
        catCyclePrevious: 'writable',
        returnCatInfo: 'writable',
        dragElement: 'writable',
        sleep: 'writable',
        getRandomInt: 'writable',
        shuffleShape: 'writable',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-var': 'warn',
      'prefer-const': 'warn',
    },
  },
  {
    ignores: ['dist/', 'dev/', 'node_modules/'],
  },
]
