<template>
	<div v-if="loading">...</div>
	<pre v-else>result: {{ JSON.stringify(result, null, 3) }}</pre>
	<div>Hello there</div>
	<button @click="addToCart(this.result)">add</button>
</template>

<script>
import query from '../groq/projectPage.groq?raw';
import viewMixin from '../mixins/viewMixin.js';

export default {
	mixins: [viewMixin],

	async created() {
		await this.sanityFetch(query, {
			slug: this.$route.params.productSlug,
		});
		this.metaTags({
			title: this.result.title,
			description: this.result.description,
			image: this.result.image.image.asset.url,
		});
	},

	methods: {
		addToCart(product) {
			this.$store.dispatch('addToCart', product);
		},
	},
};
</script>

<style></style>
