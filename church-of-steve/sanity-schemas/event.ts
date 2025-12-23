export default {
    name: 'event',
    title: 'Ritual/Event',
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
            name: 'month',
            title: 'Month (3 letters)',
            type: 'string',
            description: 'e.g., OCT, NOV',
        },
        {
            name: 'date',
            title: 'Date (Number)',
            type: 'string',
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'cta',
            title: 'Call to Action',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
