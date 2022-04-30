<template>
	<div>
		<div v-if="loading">...</div>
		<!-- Without this v-else the console throws a promise error, could never really figure out why -->
		<div v-else class="product-information">
			<img
				class="product-information__image"
				:src="imageURL"
				:alt="result.image.alt"
			/>
			<h1>{{ result.title }}</h1>
			<p>{{ result.description }}</p>
			<button
				class="product-information__add-to-cart"
				@click="addToCart(result)"
			>
				Add To Cart
			</button>
		</div>
	</div>
</template>

<script>
import query from '../groq/product.groq?raw';
import viewMixin from '../mixins/viewMixin.js';

export default {
	mixins: [viewMixin],

	async created() {
		//this.$route.params.product slug is defined when we click the routerlink on home. We use this value to determine which product to query for with the GROQ slug variable.
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
			this.$store.dispatch('calculateTotalSum', { product, operator: '+' });
		},
	},

	computed: {
		imageURL() {
			return this.result.image.image.asset.url;
		},
	},
};
</script>

<style>
.product-information *:not(.product-information__image) {
	margin: 0 32px;
}
.product-information {
	margin-top: 48px;
}
/* Going to make this button into component or use slots, since with slots we can just keep reusing the style, even for the remove from cart button */
.product-information__add-to-cart {
	background-color: #191b1d;
	color: white;
	padding: 11px 43px;
	border-radius: 5px;
	margin-top: 16px;
}
</style>
