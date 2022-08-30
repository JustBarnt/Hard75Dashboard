import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess, { scss } from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "url";
import { dirname } from "path";

// https://vitejs.dev/config/
/**@type {import("vite").UserConfig} */

const production = (process.env.NODE_ENV === "production");
const __dirname = dirname(fileURLToPath());

export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [ autoprefixer() ],
				},
			}),
		}),
		basicSsl(),
	]
});
