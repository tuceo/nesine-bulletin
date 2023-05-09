module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		node: true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-indent": [1, "tab"],
		"react/jsx-indent-props": [1, "tab"],
		"react/jsx-one-expression-per-line": [0],
		"react/jsx-props-no-spreading": [
			1,
			{
				"html": "enforce",
				"custom": "ignore",
				"explicitSpread": "enforce"
			}
		],
		"quotes": [
			"error",
			"double",
			{
				"allowTemplateLiterals": true
			}
		],
		"import/no-cycle": "off",
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"no-tabs": "off",
		"implicit-arrow-linebreak": "off",
		"no-underscore-dangle": "off",
		"operator-linebreak": ["error", "after"],
		"max-len": "off",
		"no-console": "error",
		"unsafe-optional-chaining": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 2,
				"maxBOF": 1
			}
		],
		"react/no-danger": "off",
	}
}
