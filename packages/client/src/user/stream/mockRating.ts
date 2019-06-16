import {Rating} from '../../../../common/ratings/Rating';

export const mockRatings: Rating[] = [
    {
        id: '112',
        rating: 8,
        review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
        timestamp: '16.06.2019',
        user: {
            id: '222',
            name: 'elisa'
        },
        media: {
            id: '23',
            type: 'Movie',
            title: 'Aladin',
            releaseDate: 2019,
        }
    },
    {
        id: '112',
        rating: 7,
        timestamp: '16.06.2019',
        user: {
            id: '222',
            name: 'elisa'
        },
        media: {
            id: '23',
            type: 'BoardGame',
            name: 'Siedler von Catan'
        }
    },
    {
        id: '112',
        rating: 7,
        timestamp: '16.06.2019',
        user: {
            id: '222',
            name: 'elisa'
        },
        media: {
            id: '23',
            type: 'Music',
            name: 'While A Nation Sleeps',
            artist: 'Boysetsfire'
        }
    },
    {
        id: '112',
        rating: 7,
        timestamp: '16.06.2019',
        review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
        user: {
            id: '222',
            name: 'elisa'
        },
        media: {
            id: '23',
            type: 'Book',
            title: 'Der Spieler',
            author: 'F. M. Dostojewski'
        }
    },
    {
        id: '112',
        rating: 7,
        timestamp: '16.06.2019',
        user: {
            id: '222',
            name: 'elisa'
        },
        media: {
            id: '23',
            type: 'VideoGame',
            name: 'Battlefield'
        }
    },
    {
        id: '112',
        rating: 7,
        timestamp: '16.06.2019',
        user: {
            id: '222',
            name: 'elisa'
        },
        media: {
            id: '23',
            type: 'Location',
            name: 'Brgrs Brgrs'
        }
    }
];
