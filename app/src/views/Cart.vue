<template>
	<div class="cart-overview">
		<div class="cart-overview__empty-message" v-if="items.length === 0">
			Your cart is empty, head over to our
			<RouterLink to="/">store </RouterLink> to browse!
		</div>

		<div class="cart-product" v-for="product in items" :key="product._key">
			<router-link :to="product.slug">
				<div>
					<img
						class="cart-product__image"
						:src="product.image"
						:alt="product.alt"
					/>
				</div>
			</router-link>

			<div class="cart-product__details">
				<h1 class="cart-product__title">{{ product.title }}</h1>
				<!-- <p class="cart-product__description">{{ product.description }}</p> -->

				<p class="cart-product__quantity">Quantity: {{ product.count }}</p>

				<p class="cart-product__price">${{ product.price }}</p>
				<button class="cart-product__button" @click="removeItem(product)">
					Remove
				</button>
			</div>
			<div class="bottom-menu">
				<div class="bottom-menu__total">
					<p>
						<span class="bottom-menu__total--width">Total: </span>
						<span class="bottom-menu__price">${{ totalSum }}</span>
					</p>
				</div>
				<button class="bottom-menu__checkout">Checkout</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		items() {
			return this.$store.getters.cartItems;
		},
		totalSum() {
			return this.$store.getters.totalSum;
		},
	},

	methods: {
		removeItem(product) {
			this.$store.dispatch('removeFromCart', product);
			this.$store.dispatch('calculateTotalSum', { product, operator: '-' });
		},
	},
};
</script>

<style>
.cart-overview {
	margin-top: 81px;
	/* margin: 81px auto calc(141px + 64px) auto; */
	/* first value here is the height of the bottom-menu, second value is the spacing you want between that menu and the content above. */
	margin-bottom: calc(141px + 64px);
	padding: 0 32px;
	font-size: 14px;
}

.cart-overview__empty-message {
	width: 100%;
	position: fixed;
	left: 0;
	top: 50%;
	text-align: center;
}

.cart-product {
	margin-bottom: 32px;
	display: flex;
}

.cart-product__details {
	margin-left: 16px;
}

.cart-product__image {
	max-width: var(--cart-image-width);
	background: var(--product-background);
	border-radius: 2px;
}

.cart-product__title {
	font-size: 16px;
}

.cart-product__description {
	margin-top: 8px;
}

.cart-product__quantity {
	margin-top: 4px;
	text-decoration: underline;
}

.cart-product__price {
	margin-top: 8px;
	font-weight: bold;
}

.cart-product__button {
	margin-top: 4px;
}

.bottom-menu {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	font-size: 18px;
	background: white;
}

.bottom-menu__total {
	padding: 24px 0;
	border-top: 2px solid #191b1d;
}

.bottom-menu__total--width {
	display: inline-block;
	padding-left: 32px;
}

.bottom-menu__price {
	font-weight: bold;
	text-decoration: underline;
	margin-left: 8px;
}

.bottom-menu__checkout {
	text-align: center;
	width: 100%;
	background: #191b1d;
	color: white;
	padding: 24px 0;
}

@media only screen and (min-width: 600px) {
	.bottom-menu__checkout {
		text-align: center;
		width: 20%;
		margin: 0 0 24px 32px;
		border-radius: 2px;
		background: #191b1d;
		color: white;
		padding: 24px 0;
	}
}
</style>
