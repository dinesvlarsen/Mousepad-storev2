import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'w9b51wro',
	dataset: 'production',
	apiVersion: '2022-04-19', //dagen prosjektet ble først opprettet/sist oppdatert
	useCdn: false //false for localhost, true for netlify
});