<template>
	<div>
		<div v-if="loading">...</div>
		<!-- <pre v-else>result: {{ JSON.stringify(data, null, 3) }}</pre> -->

		<!-- We loop over all the products in the data we get from store, which is set by sanity -->
		<div class="product" v-for="product in data" :key="product._id">
			<router-link :to="product.slug.current">
				<img
					class="product__image"
					:src="product.image.image.asset.url"
					:alt="product.image.asset"
				/>

				<h2 class="product__title">{{ product.title }}</h2>
				<p class="product__description">{{ product.description }}</p>
				<p class="product__price">${{ product.price }}</p>
			</router-link>
			<!-- Product used as a parameter for the addToCart function here, comes from the v-for loop. -->
			<button class="product__add-to-cart" @click="addToCart(product)">
				Add To Cart
			</button>
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
			title: 'CrazyMats',
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
.product:first-child {
	margin-top: 48px;
}

.product {
	margin-bottom: 96px;
}
/* For some reason I couldnt wrap these in their own container, probably because of the router link then ending up separated. */
.product__title,
.product__description,
.product__price,
.product__add-to-cart {
	margin: 0 32px;
}

.product__image {
	background: var(--product-background);
}

.product__title {
	margin-top: 24px;
	font-size: 30px;
}

.product__description {
	margin-top: 12px;
}

.product__price {
	margin-top: 12px;
	font-weight: bold;
}

/* Going to make this button into component or use slots, since with slots we can just keep reusing the style, even for the remove from cart button */
.product__add-to-cart {
	background-color: #191b1d;
	color: white;
	padding: 11px 43px;
	border-radius: 5px;
	margin-top: 16px;
}
</style>
