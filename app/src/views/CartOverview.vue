<template>
	<div class="cart-overview">
		<div class="cart-overview__empty-message" v-if="items.length === 0">
			Your cart is empty, head over to our
			<RouterLink to="/">store </RouterLink> to browse!
		</div>

		<div class="cart-product" v-for="product in items" :key="product._key">
			<div class="left">
				<img
					class="cart-product__image"
					:src="product.image"
					:alt="product.alt"
				/>
			</div>
			<div class="cart-product__details">
				<h1 class="cart-product__title">{{ product.title }}</h1>
				<p class="cart-product__description">{{ product.description }}</p>

				<p class="cart-product__quantity">Quantity: {{ product.count }}</p>

				<p class="cart-product__price">${{ product.price }}</p>
				<button class="cart-product__button" @click="removeItem(product)">
					Remove testing this
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		// this.addLocalStorageDataToStore();
	},

	computed: {
		items() {
			return this.$store.getters.cartItems;
		},
	},

	methods: {
		removeItem(product) {
			this.$store.dispatch('removeFromCart', product);
		},
	},
};
</script>

<style>
.cart-overview {
	margin-top: 81px;
	padding: 0 32px;
	font-size: 14px;
}

.cart-overview__empty-message {
	position: fixed;
	top: 40%;
}

.cart-product {
	margin-bottom: 32px;
	display: flex;
}

.cart-product__details {
	margin-left: 16px;
}

.cart-product__image {
	width: 168px;
	background: var(--product-background);
	border-radius: 2px;
	background: var(--product-background);
}

.cart-product__title {
	font-size: 16px;
}

.cart-product__description {
	margin-top: 8px;
}

.cart-product__quantity {
	margin-top: 16px;
	text-decoration: underline;
}

.cart-product__price {
	margin-top: 4px;
	font-weight: bold;
}

.cart-product__button {
	margin-top: 16px;
}
</style>
