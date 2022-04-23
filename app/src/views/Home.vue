<template>
	<div>
		<div v-if="loading">...</div>
		<!-- <pre v-else>result: {{ JSON.stringify(data, null, 3) }}</pre> -->

		<div class="products" v-for="product in data" :key="product._id">
			<router-link :to="product.slug.current">
				<div>{{ product.slug.current }}</div>
				<img :src="product.image.image.asset.url" :alt="product.image.asset" />

				<h2>{{ product.title }} - {{ product.size }}</h2>
				<p>{{ product.description }}</p>
				<p>
					<b>${{ product.price }}</b>
				</p>
			</router-link>
			<button @click="addToCart(product)">Add to cart</button>
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
		this.$store.dispatch('storeData', this.result);

		this.metaTags({
			title: 'Crazy Mats',
		});
	},

	methods: {
		addToCart(product) {
			this.$store.dispatch('addToCart', product);
		},
	},

	computed: {
		data() {
			return this.$store.state.data;
		},
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
