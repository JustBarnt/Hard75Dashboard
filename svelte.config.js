import sveltePreprocess from "svelte-preprocess";

export default {
	preprocess: sveltePreprocess(
		{
			scss:
			{
				prependData: `@import './src/sass/variables.scss';`
			}
		}
	)
};
