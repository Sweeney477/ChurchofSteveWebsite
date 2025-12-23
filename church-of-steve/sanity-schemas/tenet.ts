export default {
    name: 'tenet',
    title: 'Tenet',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'icon',
            title: 'Material Icon Name',
            type: 'string',
            description: 'Find names at https://fonts.google.com/icons',
        },
        {
            name: 'color',
            title: 'Background Color Class',
            type: 'string',
            description: 'e.g., bg-yellow-200, bg-orange-200',
        },
    ],
}
