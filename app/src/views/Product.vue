<template>
	<div v-if="loading">...</div>
	<pre v-else>result: {{ JSON.stringify(result, null, 3) }}</pre>
</template>

<script>
import query from '../groq/projectPage.groq?raw';
import viewMixin from '../mixins/viewMixin.js';

export default {
	mixins: [viewMixin],

	async created() {
		console.log(this.$route.params.productSlug);
		await this.sanityFetch(query, {
			slug: this.$route.params.productSlug,
		});
		console.log('this is result: ' + this.result);

		console.log();
		this.metaTags({
			title: this.result.title,
			description: this.result.description,
			image: this.result.image.image.asset.url,
		});
	},
};
</script>

<style></style>
