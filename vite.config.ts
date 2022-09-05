import { svelte } from "@sveltejs/vite-plugin-svelte";
import basicSsl from "@vitejs/plugin-basic-ssl";
import sveltePreprocess from "svelte-preprocess";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess({
				scss: {
					prependData: `@import './src/sass/variables.scss';`
				}
			}),
		}),
		basicSsl()
	]
});
