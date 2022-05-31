import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'w9b51wro',
	dataset: 'production',
	apiVersion: '2022-04-19', //day the project was started
	useCdn: true, //false for localhost, true for netlify
});