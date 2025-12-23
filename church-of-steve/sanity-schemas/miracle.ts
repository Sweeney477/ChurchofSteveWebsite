export default {
    name: 'miracle',
    title: 'Miracle (Testimonial)',
    type: 'document',
    fields: [
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'stars',
            title: 'Stars',
            type: 'number',
            validation: Rule => Rule.min(1).max(5),
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
