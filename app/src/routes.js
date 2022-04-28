import Home from './views/Home.vue';
import ProductPage from './views/Product.vue';
import Cart from './views/Cart.vue';

export default [
	{
		name: 'product',
		path: '/:productSlug',
		component: ProductPage
	},
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	}
];
