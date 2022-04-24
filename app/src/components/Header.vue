<template>
	<ul class="navigation">
		<RouterLink to="/">
			<li class="navigation__logo">CrazyMats</li>
		</RouterLink>
		<li>
			<router-link to="/cart">
				<div class="cart">
					<img
						class="cart__icon"
						src="../../public/images/Cart-icon.svg"
						alt=""
					/>
					<div class="cart__count-container">
						<div class="cart__count">{{ totalInCart }}</div>
					</div>
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	computed: {
		totalInCart() {
			return this.$store.getters.totalInCart;
		},
	},
};
</script>

<style>
.navigation {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 32px 48px;
}

.navigation__logo {
	position: relative;
	top: 5px;
	font-weight: bold;
}

.cart {
	position: relative;
}

.cart__icon {
	width: 39px;
	position: relative;
	z-index: 10;
}

.cart__count-container {
	position: absolute;
	z-index: 0;
	top: 15;
	left: 4;
	width: 31px;
	height: 24px;
}

.cart__count {
	position: relative;
	text-align: center;
	font-size: 16px;
	direction: rtl;
	top: 4px;
	font-weight: bold;
	color: black;
}
</style>
