<template>
	<div class="cart-products">
		<div v-for="product in items" :key="product._key">{{ product }}</div>
	</div>
</template>

<script>
export default {
	computed: {
		items() {
			return this.$store.getters.cartItems;
		},
	},
};
</script>

<style></style>
