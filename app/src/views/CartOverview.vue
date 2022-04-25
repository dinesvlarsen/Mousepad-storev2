<template>
	<div v-if="items.length === 0">
		Your cart is empty, head over to our <RouterLink to="/">store </RouterLink> to browse!
	</div>
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
