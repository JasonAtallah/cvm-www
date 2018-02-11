// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    '$': true,
    'jQuery': true,
    '_': true,
    '$event': true,
    'showdown': true
  },
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'arrow-body-style': 0,
    'comma-dangle': 0,
    'func-names': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'no-bitwise': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { 'props': false }],
    'no-shadow': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'no-mixed-operators': 0,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    'prefer-rest-params': 0
  }
};
