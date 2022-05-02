export default {
	name: 'product',
	type: 'document',
	title: 'Product',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			},
			validation: Rule => Rule.required(),
		},
		{
			title: 'Price',
			name: 'price',
			type: 'string',
			description: 'Price in USD'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string'
		},
		{
			title: 'Image',
			name: 'image',
			type: 'reference',
			to: [{ type: 'figure' }]
		},
		{
			title: 'Quantity',
			name: 'quantity',
			type: 'number',
		},
		{
			title: 'Size',
			name: 'size',
			type: 'reference',
			to: [{ type: 'size' }]
			// options: {
			// 	list: [
			// 		{ title: 'Small', value: 'S' },
			// 		{ title: 'Medium', value: 'M' },
			// 		{ title: 'Large', value: 'L' }
			// 	]
			// }

		}
	]
}