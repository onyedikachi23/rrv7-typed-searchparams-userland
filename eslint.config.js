/** @format */

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import youMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";

export default tseslint.config(
	{ ignores: [, "build", , ".git", ".react-router", "node_modules"] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommendedTypeChecked,
		],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			globals: globals.browser,
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: { react: { version: "detect" } },
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			react,
			"react-you-might-not-need-an-effect": youMightNotNeedAnEffect,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{
					allowConstantExport: true,
				},
			],
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
			"react/prop-types": "off",
			"react-you-might-not-need-an-effect/you-might-not-need-an-effect":
				"warn",
		},
	}
);
