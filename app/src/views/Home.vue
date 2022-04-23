<template>
	<div>
		<div v-if="loading">...</div>
		<!-- <pre v-else>result: {{ JSON.stringify(result, null, 3) }}</pre> -->

		<div class="products" v-for="product in result" :key="product._id">
			<router-link :to="product.slug.current">
				<div>{{ product.slug.current }}</div>
				<img :src="product.image.image.asset.url" :alt="product.image.asset" />

				<h2>{{ product.title }} - {{ product.size }}</h2>
				<p>{{ product.description }}</p>
				<p>
					<b>${{ product.price }}</b>
				</p>
			</router-link>
		</div>
	</div>
</template>

<script>
import query from '../groq/home.groq?raw';
import viewMixin from '../mixins/viewMixin.js';

export default {
	mixins: [viewMixin],

	async created() {
		console.log(this.$route.params);
		await this.sanityFetch(query, { type: 'product' });

		this.$store.state.data = await this.sanityFetch(query, { type: 'product' });
		console.log(this.$store.state.data);

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
