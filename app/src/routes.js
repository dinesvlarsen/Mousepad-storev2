import Home from './views/Home.vue';
import ProductPage from './views/Product.vue';

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
];
