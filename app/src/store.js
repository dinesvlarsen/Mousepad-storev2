export default {
	state() {
		return {
			data: [],
			cart: [],
			totalInCart: 0,
			totalSum: 0,
		};
	},

	mutations: {
		storeData(state, data) {
			state.data = data
		},

		passLocalStorageToCart(state, product) {
			state.cart.push(product)
		},

		addToCart(state, product) {

			// Checks if an item already exists in the store cart by looking through all the items in the cart array, and checking them against the current product id.
			if (state.cart.some(item => item.id === product._id)) {
				const alreadyInCart = state.cart.find(itemInCart => itemInCart.id === product._id);
				alreadyInCart.count++
				localStorage.setItem(product.title, JSON.stringify(alreadyInCart));


			} else {
				const cartProduct = {
					title: product.title,
					description: product.description,
					price: product.price,
					image: product.image.image.asset.url,
					id: product._id,
					count: 1
				}
				state.cart.push(cartProduct)
				localStorage.setItem(product.title, JSON.stringify(cartProduct));
			}
			const items = localStorage.getItem('cart')
			console.log(JSON.parse(items))

			state.totalInCart++
			// localStorage.setItem('totalInCart', totalInCart)
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

		addTotalFromLocal(state, _) {
			const initialValue = 0;
			const total = state.cart.reduce((previousValue, currentValue) => previousValue + currentValue.count, initialValue)
			state.totalInCart = total
		},
		
		calculateTotalSum(state, { product, operator: operator }) {
			const price = +product.price
			if (operator === '+') state.totalSum += price;
			else state.totalSum -= price;

		}
	},

	actions: {
		passLocalStorageToCart(passToCart, product) {
			passToCart.commit('passLocalStorageToCart', product)

		},
		storeData(storeData, data) {
			storeData.commit('storeData', data)
		},
		addToCart(addToCart, product) {
			addToCart.commit('addToCart', product)
		},
		removeFromCart(removeFromCart, product) {
			removeFromCart.commit('removeFromCart', product)
		},

		addTotalFromLocal(addTotalFromLocal, _) {
			console.log('hello')
			addTotalFromLocal.commit('addTotalFromLocal')
		calculateTotalSum(calculateTotalSum, { product, operator }) {
			calculateTotalSum.commit('calculateTotalSum', { product, operator })
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

		},
		totalSum(state) {
			return state.totalSum
		}
	},


};