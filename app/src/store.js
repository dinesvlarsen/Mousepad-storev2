export default {
	state() {
		return {
			data: [],
			cart: [],
		};
	},

	mutations: {
		storeData(state, data) {
			state.data = data
		},

		addToCart(state, product) {
			const cartProduct = {
				title: product.title,
				price: product.price,
				image: product.image.image.asset.url,
			}
			state.cart.push(cartProduct)
		}
	},

	actions: {
		storeData(storeData, data) {
			storeData.commit('storeData', data)
		},

		addToCart(addToCart, product) {
			addToCart.commit('addToCart', product)
		}
	},

	getters: {
		data(state) {
			return state.data
		},

		cartItems(state) {
			return state.cart
		}
	},


};