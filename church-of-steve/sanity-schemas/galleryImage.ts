export default {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        }
    ],
}
