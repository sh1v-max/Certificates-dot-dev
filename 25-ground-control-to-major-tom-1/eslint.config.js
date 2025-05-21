import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  stylisticJs['configs']['all-flat'],
  {
    'rules': {
      '@stylistic/js/semi': [
        'error',
        'never'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/padded-blocks': [
        'error',
        { 'blocks': 'never' }
      ],
      '@stylistic/js/function-call-argument-newline': [
        'error',
        'never'
      ],
      '@stylistic/js/object-curly-spacing': [
        'error',
        'always',
        { 'objectsInObjects': false }
      ],
      '@stylistic/js/multiline-ternary': [
        'error',
        'never'
      ],
      '@stylistic/js/no-extra-parens': 'off'
    }
  }
]
