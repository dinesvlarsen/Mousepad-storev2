import Home from './views/Home.vue';
import ProductPage from './views/Product.vue';
import CartOverview from './views/CartOverview.vue';

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
		name: 'cartOverview',
		path: '/cart',
		component: CartOverview
	}
];
