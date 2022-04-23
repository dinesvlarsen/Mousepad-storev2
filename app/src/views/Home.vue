<template>
	<div>
		<div v-if="loading">...</div>
		<!-- <pre v-else>result: {{ JSON.stringify(result, null, 3) }}</pre> -->
		<div class="products" v-for="product in result" :key="product._id">
			<img :src="product.image.image.asset.url" :alt="product.image.asset" />

			<h2>{{ product.title }} - {{ product.size }}</h2>
			<p>{{ product.description }}</p>
			<p>
				<b>${{ product.price }}</b>
			</p>
		</div>
	</div>
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
			title: 'Crazy Mats',
		});
	},
};
</script>

<style>
.products img {
	width: 388px;
	height: 388px;
	border-radius: 2px;
}
</style>
