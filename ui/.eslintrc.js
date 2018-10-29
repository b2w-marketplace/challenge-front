module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended", "airbnb-base-hf"],
  "plugins": [
    "import",
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "semi": [2, "never"],
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
}
