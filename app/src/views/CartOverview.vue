<template>
	<div class="cart-products">
		<div v-for="product in items" :key="product._key">
			{{ product.count }}
			<button @click="removeItem(product)">Remove item</button>
		</div>
	</div>
</template>

<script>
export default {
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

<style></style>
