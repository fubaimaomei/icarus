const { doc, type, defaultValue,required } = require('../common/utils').descriptors;

module.exports = {
    [type]: ['string', 'object'],
    [doc]: 'Navigation bar link settings',
    menu: {
        [type]: 'object',
        [doc]: 'Navigation bar menu links',
        [defaultValue]: {
            Home: '/',
            Archives: '/archives',
            Categories: '/categories',
            Tags: '/tags',
            About: '/about'
        },
        '*': {
            [type]: ['string', 'object'],
            [doc]: 'Path or URL to the menu item, and/or link icon class names',
            icon: {
                [required]: true,
                [type]: 'string',
                [doc]: 'Link icon class names'
            },
            url: {
                [required]: true,
                [type]: 'string',
                [doc]: 'Path or URL to the menu item'
            }
        }
    },
    links: {
        ...require('./icon_link.spec'),
        [doc]: 'Navigation bar links to be shown on the right',
        [defaultValue]: {
            'Download on GitHub': {
                icon: 'fab fa-github',
                url: 'https://github.com/fubaimaomei'
            }
        }
    }
};