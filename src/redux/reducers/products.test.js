import products from './products';
import { setLoaded, setProducts } from '../actions/products';

let state = {
    items: [
        {
            id: 0,
            imageUrl:
                'https://static.21vek.by/img/galleries/543/433/preview/40360335_ikea_5a946689e46c6.jpeg',
            name: 'Одвар(табурет Ikea)',
            price: 30,
            category: 0,
            rating: 4,
        },
        {
            id: 1,
            imageUrl:
                'https://static.21vek.by/img/galleries/453/934/preview/10359791_ikea_592423e30cbfe.jpeg',
            name: 'Адде(стул Ikea )',
            price: 45,
            category: 0,
            rating: 6,
        },
    ],
    isLoaded: false,
};

test('products isLoaded should be true', () => {
    let action = setLoaded(true);

    let newState = products(state, action);

    expect(newState.isLoaded).toBe(true);
});

test('new items should be put isLoaded should be true', () => {
    let items = [
        {
            id: 2,
            imageUrl:
                'https://static.21vek.by/img/galleries/996/413/preview/savline_011_5cd664e0757ca.jpeg',
            name: 'Томас(стул Сав-Лайн)',
            price: 40,
            category: 2,
            rating: 4,
        },
        {
            id: 3,
            imageUrl:
                'https://static.21vek.by/img/galleries/434/56/preview/dc060a_mio_tesoro_05_5d370dddb788b.jpeg',
            name: 'Инес(стул Mio Tesoro)',
            price: 73,
            category: 1,
            rating: 2,
        },
    ];

    let action = setProducts(items);

    let newState = products(state, action);
    expect(newState.isLoaded).toBe(true);
    expect(newState.items[0].id).toBe(items[0].id);
    expect(newState.items[1].id).toBe(items[1].id);
    expect(newState.items.length).toBe(2);
});
