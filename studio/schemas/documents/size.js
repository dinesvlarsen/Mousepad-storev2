export default {
	title: 'Sizes',
	name: 'size',
	type: 'document',
	fields: [
		{
			title: 'Size',
			name: 'size',
			type: 'string'
		},
		{
			title: 'Dimensions',
			name: 'dimensions',
			type: 'string'
		},
		{
			title: 'Thickness',
			name: 'thickness',
			type: 'string',
			options: {
				list: [
					{ title: '1mm', value: '1mm' },
					{ title: '2mm', value: '2mm' },
					{ title: '3mm', value: '3mm' },
					{ title: '4mm', value: '4mm' }
				]
			}
		}
	]
}