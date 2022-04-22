<template>
	<div v-if="loading">...</div>
	<pre v-else>result: {{ JSON.stringify(result, null, 3) }}</pre>
</template>

<script>
import query from '../groq/home.groq?raw';
import viewMixin from '../mixins/viewMixin.js';

export default {
	mixins: [viewMixin],

	async created() {
		await this.sanityFetch(query, { type: 'product' });
		this.$store.state.data = await this.sanityFetch(query, { type: 'product' });

		this.metaTags({
			title: 'Hello from Home.vue',
		});
	},
};
</script>
