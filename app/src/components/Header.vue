<template>
	<ul class="navigation">
		<RouterLink to="/">
			<li>Logo</li>
		</RouterLink>
		<li>
			<router-link to="/cart">
				<div>{{ items }}</div>
			</router-link>
		</li>
	</ul>
</template>

<style>
.navigation {
	display: flex;
	justify-content: space-between;
	padding: 26px 16px 26px;
}
</style>

<script>
export default {
	computed: {
		items() {
			return this.$store.getters.cartItems.length;
		},
	},
};
</script>
