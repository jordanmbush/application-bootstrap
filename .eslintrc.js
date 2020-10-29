// If your vscode has multiple formatters, you may have to tell vscode to use prettier
module.exports = {
  // https://standardjs.com/rules.html#javascript-standard-style
  extends: ['standard', 'standard-jsx'],

  globals: {
    // app globals
    React: 'writable',
    document: 'writable',
    fetch: 'writable',

    window: 'writable',
    // Test globals
    after: 'readonly',
    afterAll: 'readonly',
    afterEach: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly',
    describe: 'readonly',
    expect: 'readonly',
    it: 'readonly',
    jest: 'readonly',
    test: 'readonly',
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },

  plugins: ['import', 'jsx-a11y', 'react'],

  rules: {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    complexity: ['warn', 12],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'warn',
    'id-length': [
      'error',
      {
        exceptions: ['_', 'i', 'j', 'k', 'x', 'y', 'z'],
        properties: 'never',
      },
    ],
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'error',
    indent: 'off',

    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'max-depth': ['warn', 4],
    'max-len': 'off',
    'max-statements': ['warn', 30],
    'new-cap': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      },
    ],
    'no-confusing-arrow': 'off',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'off',
    'no-loop-func': 'error',
    'no-mixed-operators': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: 'React',
      },
    ],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': 'error',
    'object-shorthand': 'error',
    'operator-linebreak': ['error', 'after', {overrides: {'?': 'before', ':': 'before'}}],

    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {array: true, object: true},
        AssignmentExpression: {array: false, object: false},
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-no-undef': [
      'error',
      {
        allowGlobals: true,
      },
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'require-jsdoc': 'off',
    semi: ['error', 'always'],
    'sort-imports': [
      'error',
      {
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
    'sort-keys': [
      'error',

      'asc',
      {
        natural: true,
      },
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {anonymous: 'never', asyncArrow: 'always', named: 'never'},
    ],
    'space-in-parens': 'error',
    'spaced-comment': 'error',
    'standard/computed-property-even-spacing': 'off',
    'template-curly-spacing': 'error',
    'valid-jsdoc': [
      'warn',
      {
        requireParamDescription: false,
        requireReturn: false,
        requireReturnDescription: false,
      },
    ],
  },

  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      {property: 'freeze', object: 'Object'},
      {property: 'myFavoriteWrapper'},
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      {name: 'Link', linkAttribute: 'to'},
    ],
  },
};
