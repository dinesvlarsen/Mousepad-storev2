export default {
	state() {
		return {
			data: [],
			cart: [],
			totalInCart: 0,
		};
	},

	mutations: {
		storeData(state, data) {
			state.data = data
		},

		addToCart(state, product) {
			// Checks if an item already exists in the store cart by looking through all the items in the cart array, and checking them against the current product id.
			if (state.cart.some(item => item.id === product._id)) {
				const alreadyInCart = state.cart.find(itemInCart => itemInCart.id === product._id);
				alreadyInCart.count++
			} else {

				const cartProduct = {
					title: product.title,
					price: product.price,
					image: product.image.image.asset.url,
					id: product._id,
					count: 1
				}
				state.cart.push(cartProduct)
			}

			state.totalInCart++
		},

		removeFromCart(state, product) {

			const productToRemove = state.cart.find(itemInCart => itemInCart.id === product.id);

			if (productToRemove.count === 1) {
				state.cart.splice(productToRemove, 1)
				state.totalInCart--
			} else {
				productToRemove.count--
				state.totalInCart--
			}
		}
	},

	actions: {
		storeData(storeData, data) {
			storeData.commit('storeData', data)
		},

		addToCart(addToCart, product) {
			addToCart.commit('addToCart', product)
		},

		removeFromCart(removeFromCart, product) {
			removeFromCart.commit('removeFromCart', product)
		}
	},

	getters: {
		data(state) {
			return state.data
		},

		cartItems(state) {
			return state.cart
		},

		totalInCart(state) {
			return state.totalInCart
		}
	},


};