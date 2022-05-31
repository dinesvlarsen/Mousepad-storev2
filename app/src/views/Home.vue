<template>
	<div class="products">
		<div v-if="loading">...</div>

		<!-- We loop over all the products in the data we get from store, which is set by sanity -->
		<div
			v-else
			class="product"
			v-for="product in sanityData"
			:key="product._id"
		>
			<router-link :to="product.slug.current">
				<img
					class="product__image"
					:src="product.image.image.asset.url"
					:alt="product.image.asset"
				/>

				<h2 class="product__title">{{ product.title }}</h2>

				<p class="product__size">{{ product.size.size }}</p>
				<p class="product__dimensions">({{ product.size.dimensions }})</p>

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
			this.$store.dispatch('calculateTotalSum', { product, operator: '+' });

			const totalInCart = this.totalInCart;
			const totalSum = this.totalSum;
			this.$store.dispatch('setLocalStorage', {
				product,
				totalInCart: totalInCart,
				totalSum: totalSum,
			});
		},
	},

	computed: {
		sanityData() {
			return this.$store.state.sanityData;
		},
		totalInCart() {
			return this.$store.state.totalInCart;
		},
		totalSum() {
			return this.$store.state.totalSum;
		},
	},
};
</script>

<style>
.product {
	margin-bottom: 96px;
}

.product *:not(.product__image) {
	margin-left: 32px;
}

.product__image {
	background: var(--product-background);
	border: 2px solid black;
	border-radius: 2px;
}

.product__title {
	margin-top: 24px;
	font-size: 20px;
}

.product__size {
	margin-top: 12px;
}

.product__dimensions {
	margin-top: 4px;
}
.product__size,
.product__dimensions {
	color: #3f3f3f;
	font-size: 16spx;
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

@media only screen and (min-width: 600px) {
	.product *:not(.product__image) {
		margin-left: 0;
		margin-right: 0;
	}

	.products {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
		padding: 0 32px;
	}
}

@media only screen and (min-width: 1000px) {
	.products {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
