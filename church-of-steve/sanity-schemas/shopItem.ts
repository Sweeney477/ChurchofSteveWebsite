export default {
    name: 'shopItem',
    title: 'Shop Item',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Item Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
