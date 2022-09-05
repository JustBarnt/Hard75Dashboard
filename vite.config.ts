import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
/**@type {import("vite").UserConfig} */

const production = (process.env.NODE_ENV === "production");

export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [ autoprefixer() ],
				},
				scss: {
					prependData: `@import './src/sass/variables.scss';`
				}
			}),
		}),
		basicSsl(),
	]
});
