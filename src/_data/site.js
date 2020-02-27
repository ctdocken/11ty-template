module.exports = {
    layout: 'layouts/default.njk',
    name: '11ty Template',
    subtitle: 'A sample site using Eleventy',
    author: {
        fullName: 'Author',
        biography:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum augue turpis, ornare sed tortor ut, lacinia aliquam nisl. Phasellus tellus turpis, fermentum vitae commodo ac, euismod sed magna. Nunc laoreet elementum tellus, eget commodo nisi suscipit nec.'
    },
    primaryNav: [
        { title: 'Uses', subtitle: 'How I Work', url: '/uses' },
        { title: 'Now', subtitle: "What I'm Doing", url: '/now' }
    ],
    socialMedia: [
        { title: 'Facebook', subtitle: '', url: '//www.facebook.com' },
        { title: 'Instagram', subtitle: '', url: '//www.instagram.com' },
        { title: 'Twitter', subtitle: '', url: '//www.twitter.com' },
        { title: 'LinkedIn', subtitle: '', url: '//www.linkedin.com' },
        { title: 'Twitch', subtitle: '', url: '//www.twitch.tv' },
        { title: 'YouTube', subtitle: '', url: '//www.youtube.com' }
    ],
    copyright: new Date()
};
