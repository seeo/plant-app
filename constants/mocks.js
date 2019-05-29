const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations', 'shop'],
        count: 147,
        image: require('../assets/icons/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products','shop'],
        count: 16,
        image: require('../assets/icons/seeds.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 60,
        image: require('../assets/icons/flowers.png')
    },
    {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 47,
        image: require('../assets/icons/pots.png')
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 47,
        image: require('../assets/icons/fertilizers.png')
    },
]

const products = [
    {
        id: 1,
        name: '',
        description: '',
        tags: ['Interior', '27 m', 'Ideas'],
        gallery: [
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
            //showing only three images, add extra +3 for the rest
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png')
        ]
    }
];

const explore = [
    //images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
];

const profile = {
    username: 'Siang Ee',
    location: 'Singapore',
    email: 'contact@Everpine',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
};

export {
    categories,
    explore,
    products,
    profile,
};