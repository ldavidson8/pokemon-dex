import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import parser from "svelte-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/*.cjs",
        "**/svelte.config.js",
        "**/.DS_Store",
        "**/node_modules",
        "build",
        ".svelte-kit",
        "package",
        "**/.env",
        "**/.env.*",
        "!**/.env.example",
        "**/pnpm-lock.yaml",
        "**/package-lock.json",
        "**/yarn.lock",
    ],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "@tanstack/query": tanstackQuery,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            extraFileExtensions: [".svelte"],
        },
    },
}, {
    files: ["**/*.svelte"],

    languageOptions: {
        parser: parser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            parser: "@typescript-eslint/parser",
        },
    },
}];