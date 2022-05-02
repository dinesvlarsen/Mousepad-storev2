export default {
	state() {
		return {
			sanityData: [],
			cart: [],
			totalInCart: 0,
			totalSum: 0,
		};
	},

	mutations: {
		storeData(state, sanityData) {
			state.sanityData = sanityData
		},

		addToCart(state, product) {
			// Checks if an item already exists in the store cart by looking through all the items in the cart array, and checking them against the current product id.
			if (state.cart.some(item => item.id === product._id)) {
				const alreadyInCart = state.cart.find(itemInCart => itemInCart.id === product._id);
				alreadyInCart.count++
				// localStorage.setItem(alreadyInCart.title, alreadyInCart)

			} else {
				const cartProduct = {
					title: product.title,
					description: product.description,
					price: product.price,
					image: product.image.image.asset.url,
					id: product._id,
					slug: product.slug.current,
					count: 1
				}

				state.cart.push(cartProduct)
				// localStorage.setItem(cartProduct.title, cartProduct)

			}
			state.totalInCart++
		},

		removeFromCart(state, product) {

			const productToRemove = state.cart.find(itemInCart => itemInCart.id === product.id);

			if (productToRemove.count === 1) {
				const indexOfProduct = state.cart.findIndex(object => {
					return object.id === productToRemove.id;
				});
				state.cart.splice(indexOfProduct, 1)
				state.totalInCart--
			} else {
				productToRemove.count--
				state.totalInCart--
			}


		},

		calculateTotalSum(state, { product, operator: operator }) {
			const price = +product.price
			if (operator === '+') state.totalSum += price;
			else state.totalSum -= price;
		},

		// setLocalStorage(_, { product, totalInCart, totalSum }) {
		// 	// localStorage.setItem(product.title, product)
		// 	localStorage.setItem("total in cart", totalInCart)
		// 	localStorage.setItem("total sum", totalSum)
		// }
	},

	actions: {
		storeData(storeData, sanityData) {
			storeData.commit('storeData', sanityData)
		},

		addToCart(addToCart, product) {
			addToCart.commit('addToCart', product)
		},

		removeFromCart(removeFromCart, product) {
			removeFromCart.commit('removeFromCart', product)
		},

		calculateTotalSum(calculateTotalSum, { product, operator }) {
			calculateTotalSum.commit('calculateTotalSum', { product, operator })
		},

		// setLocalStorage(setLocalStorage, { product, totalInCart, totalSum }) {
		// 	setLocalStorage.commit('setLocalStorage', { product, totalInCart, totalSum })
		// }

	},

	getters: {
		sanityData(state) {
			return state.sanityData
		},
		cartItems(state) {
			return state.cart
		},
		totalInCart(state) {
			return state.totalInCart
		},
		totalSum(state) {
			return state.totalSum
		}
	},


};