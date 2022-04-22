export default {
	name: 'figure',
	title: 'Figure',
	type: 'document',
	fields: [
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			description: 'Image should be at least 389x389px',
			options: {
				hotspot: true
			},
		},
		{
			title: 'Alt',
			name: 'alt',
			type: 'string',
			description: 'Explain what is on the image',
			
		}
	]
}