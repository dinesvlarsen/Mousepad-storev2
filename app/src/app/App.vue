<template>
	<Header />
	<RouterView />
</template>

<script>
import viewMixin from '../mixins/viewMixin.js';
import Header from '../components/Header.vue';

export default {
	mixins: [viewMixin],
	components: { Header },
	created() {
		this.addLocalStorageDataToStore();
	},
};
</script>

<style>
@import '../style/reset.css';
@import '../style/variables.css';
@import '../style/fonts.css';
@import '../style/style.css';
</style>
