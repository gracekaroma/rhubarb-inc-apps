
const dataBase = {
    header: {
        logo: require('../Images/Logo/header-logo.svg').default
    },
    home: {
        background1: require('../Images/Background/home-background-1.svg').default,
        background2: require('../Images/Background/home-background-2.svg').default,
        background3: require('../Images/Background/home-background-3.svg').default,
        background4: require('../Images/Background/home-background-4.svg').default,
        partner: [
            {
                name: 'tiktok',
                image: 'home-tiktok.svg'
            },
            {
                name: 'spotify',
                image: 'home-spotify.svg'
            },
            {
                name: 'youtube',
                image: 'home-youtube.svg'
            },
            {
                name: 'sound cloud',
                image: 'home-soundcloud.svg'
            },
            {
                name: 'apple music',
                image: 'home-applemusic.svg'
            }
        ],
        team: [
            {
                name: 'David Christopher',
                image: 'david-christopher.svg',
                position: 'Developer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Emily Scott',
                image: 'emily-scott.svg',
                position: 'Developer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Steven Paul',
                image: 'steven-paul.svg',
                position: 'Developer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Thomas Charles',
                image: 'thomas-charles.svg',
                position: 'Developer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Jennifer Kenneth',
                image: 'jennifer-kenneth.svg',
                position: 'Product Manager',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Mary Joseph',
                image: 'mary-joseph.svg',
                position: 'Chief Executive Officer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Ryan Dorothy',
                image: 'ryan-dorothy.svg',
                position: 'Chief Technology Officer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            }
        ],
        social : [
            {
                name: 'Facebook',
                image: 'home-team-facebook.svg'
            },
            {
                name: 'Instagram',
                image: 'home-team-instagram.svg'
            },
            {
                name: 'LinkedIn',
                image: 'home-team-linkedin.svg'
            },
            {
                name: 'Twitter',
                image: 'home-team-twitter.svg'
            }
        ],
        testimonial: [
            {
                name: 'Marry',
                image: 'marry.svg',
                job: 'Actress',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Evelyn',
                image: 'evelyn.svg',
                job: 'Designer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Happy',
                image: 'happy.svg',
                job: 'Writer',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
            {
                name: 'Jessica',
                image: 'jessica.svg',
                job: 'Doctor',
                notes: 'velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet'
            },
        ] 
    },
    information: {
        background1: require('../Images/Background/information-background-1.svg').default,
        background2: require('../Images/Background/information-background-2.svg').default,
        background3: require('../Images/Background/information-background-3.svg').default,
        background4: require('../Images/Background/information-background-4.svg').default,
        instagram: require('../Images/Logo/information-contact-instagram.svg').default,
        twitter: require('../Images/Logo/information-contact-twitter.svg').default,
        facebook: require('../Images/Logo/information-contact-facebook.svg').default,
        history: [
            {
                year: '1965',
                title: 'First Journey',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                year: '1995',
                title: 'Third Journey',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                year: '2015',
                title: 'Fifth Journey',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                year: '2023',
                title: 'Seventh Journey',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        values: [
            {
                title: 'Think Big',
                image: 'think-big.svg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                title: 'Creative',
                image: 'creative.svg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                title: 'Active',
                image: 'active.svg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                title: 'Good Relationship',
                image: 'good-relationship.svg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
        ]
    },
    product: {
        background: require('../Images/Background/product-background.svg').default,
        products: [
            {
                id: '1',
                name: 'BTS 5th MINI ALBUM LOVE YOURSELF',
                artist: 'BTS',
                image: require('../Images/Picture/Product/bts-album.png'),
                price: '38.00',
                category: 'album'
            },
            {
                id: '2',
                name: 'BLACKPINK 3rd ALBUM SQUARE ONE',
                artist: 'BLACKPINK',
                image: require('../Images/Picture/Product/blackpink-album.png'),
                price: '38.00',
                category: 'album'
            },
            {
                id: '3',
                name: 'SVT 8th MINI ALBUM YOUR CHOICE',
                artist: 'SEVENTEEN',
                image: require('../Images/Picture/Product/seventeen-album.png'),
                price: '38.00',
                category: 'merch'
            },
            {
                id: '4',
                name: 'AESPA 2nd MINI ALBUM NEXT lEVEL',
                artist: 'AESPA',
                image: require('../Images/Picture/Product/aespa-album.png'),
                price: '38.00',
                category: 'merch'
            },
            {
                id: '5',
                name: 'BTS 5th MINI ALBUM LOVE YOURSELF',
                artist: 'BTS',
                image: require('../Images/Picture/Product/bts-album.png'),
                price: '38.00',
                category: 'book'
            },
            {
                id: '6',
                name: 'BLACKPINK 3rd ALBUM SQUARE ONE',
                artist: 'BLACKPINK',
                image: require('../Images/Picture/Product/blackpink-album.png'),
                price: '38.00',
                category: 'book'
            },
            {
                id: '7',
                name: 'SVT 8th MINI ALBUM YOUR CHOICE',
                artist: 'SEVENTEEN',
                image: require('../Images/Picture/Product/seventeen-album.png'),
                price: '38.00',
                category: 'book'
            },
            {
                id: '8',
                name: 'AESPA 2nd MINI ALBUM NEXT lEVEL',
                artist: 'AESPA',
                image: require('../Images/Picture/Product/aespa-album.png'),
                price: '38.00',
                category: 'book'
            }
        ],
        plus: require('../Images/Picture/plus.svg').default,
        minus: require('../Images/Picture/minus.svg').default
    },
    blog: {
        background: require('../Images/Background/blog-background.svg').default,
        blogs: [
            {
                id: '1',
                title: 'nisi scelerisque eu ultrices vitae auctor',
                imageOut: '1O.svg',
                imageIn: require('../Images/Picture/Blog/1I.png'),
                publisher: 'Grace Karoma',
                datePost: '26 September 2023',
                category: 'Product',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem. Nam at lectus urna duis convallis convallis tellus id. Non tellus orci ac auctor augue mauris augue neque. Augue lacus viverra vitae congue. Sit amet venenatis urna cursus eget. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Fames ac turpis egestas integer eget aliquet. Et ultrices neque ornare aenean. Nunc sed augue lacus viverra vitae congue eu. Eu tincidunt tortor aliquam nulla facilisi cras. Dictumst vestibulum rhoncus est pellentesque elit.'
            },
            {
                id: '2',
                title: 'aliquam id diam',
                imageOut: '2O.svg',
                imageIn: require('../Images/Picture/Blog/2I.png'),
                publisher: 'Grace Karoma',
                datePost: '26 September 2023',
                category: 'Culture',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem. Nam at lectus urna duis convallis convallis tellus id. Non tellus orci ac auctor augue mauris augue neque. Augue lacus viverra vitae congue. Sit amet venenatis urna cursus eget. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Fames ac turpis egestas integer eget aliquet. Et ultrices neque ornare aenean. Nunc sed augue lacus viverra vitae congue eu. Eu tincidunt tortor aliquam nulla facilisi cras. Dictumst vestibulum rhoncus est pellentesque elit.'
            },
            {
                id: '3',
                title: 'vitae auctor',
                imageOut: '3O.svg',
                imageIn: require('../Images/Picture/Blog/3I.png'),
                publisher: 'Grace Karoma',
                datePost: '26 September 2023',
                category: 'Service',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem. Nam at lectus urna duis convallis convallis tellus id. Non tellus orci ac auctor augue mauris augue neque. Augue lacus viverra vitae congue. Sit amet venenatis urna cursus eget. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Fames ac turpis egestas integer eget aliquet. Et ultrices neque ornare aenean. Nunc sed augue lacus viverra vitae congue eu. Eu tincidunt tortor aliquam nulla facilisi cras. Dictumst vestibulum rhoncus est pellentesque elit.'
            },
            {
                id: '4',
                title: 'nisi scelerisque eu ultrices vitae auctor',
                imageOut: '1O.svg',
                imageIn: require('../Images/Picture/Blog/1I.png'),
                publisher: 'Grace Karoma',
                datePost: '26 September 2023',
                category: 'Product',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem. Nam at lectus urna duis convallis convallis tellus id. Non tellus orci ac auctor augue mauris augue neque. Augue lacus viverra vitae congue. Sit amet venenatis urna cursus eget. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Fames ac turpis egestas integer eget aliquet. Et ultrices neque ornare aenean. Nunc sed augue lacus viverra vitae congue eu. Eu tincidunt tortor aliquam nulla facilisi cras. Dictumst vestibulum rhoncus est pellentesque elit.'
            },
            {
                id: '5',
                title: 'aliquam id diam',
                imageOut: '2O.svg',
                imageIn: require('../Images/Picture/Blog/2I.png'),
                publisher: 'Grace Karoma',
                datePost: '26 September 2023',
                category: 'Culture',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem. Nam at lectus urna duis convallis convallis tellus id. Non tellus orci ac auctor augue mauris augue neque. Augue lacus viverra vitae congue. Sit amet venenatis urna cursus eget. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Fames ac turpis egestas integer eget aliquet. Et ultrices neque ornare aenean. Nunc sed augue lacus viverra vitae congue eu. Eu tincidunt tortor aliquam nulla facilisi cras. Dictumst vestibulum rhoncus est pellentesque elit.'
            },
            {
                id: '6',
                title: 'vitae auctor',
                imageOut: '3O.svg',
                imageIn: require('../Images/Picture/Blog/3I.png'),
                publisher: 'Grace Karoma',
                datePost: '26 September 2023',
                category: 'Service',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem. Nam at lectus urna duis convallis convallis tellus id. Non tellus orci ac auctor augue mauris augue neque. Augue lacus viverra vitae congue. Sit amet venenatis urna cursus eget. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Fames ac turpis egestas integer eget aliquet. Et ultrices neque ornare aenean. Nunc sed augue lacus viverra vitae congue eu. Eu tincidunt tortor aliquam nulla facilisi cras. Dictumst vestibulum rhoncus est pellentesque elit.'
            }
        ]
    },
    nopage: {
        background: require('../Images/Background/nopage-background.svg').default,
        errorImg: require('../Images/Picture/error-picture.svg').default
    },
    continueApp: {
        continueAppImg: require('../Images/Picture/continueapp-picture.svg').default
    },
    footer: {
        background: require("../Images/Background/footer-background.svg").default,
        logo: require("../Images/Logo/footer-logo.svg").default,
        instagram: require("../Images/Logo/footer-instagram.svg").default,
        facebook: require("../Images/Logo/footer-facebook.svg").default,
        twitter: require("../Images/Logo/footer-twitter.svg").default
    }
};

export default dataBase;