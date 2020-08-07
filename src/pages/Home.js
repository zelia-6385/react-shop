import React from 'react';

import { Categories, SortPopup, ProductBlock, Preloader } from '../components';

import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';

import { fetchProducts } from '../redux/actions/products';
import { addProductToCart } from '../redux/actions/cart';

const categoryNames = ['Ikea', 'Mio Tesoro', 'Сав-Лайн'];

const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'названию', type: 'name', order: 'asc' },
];

const Home = React.memo(function Home() {
    // Не должен обязательно возвращать объект
    const items = useSelector(({ products }) => products.items);
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    const cartItems = useSelector(({ cart }) => cart.items);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProducts(category, sortBy));
    }, [dispatch, category, sortBy]);

    // при ререндере компонента функция не пересоздается
    const onSelectCategory = React.useCallback(
        (index) => {
            dispatch(setCategory(index));
        },
        [dispatch],
    );

    const onSelectSortType = React.useCallback(
        (obj) => {
            dispatch(setSortBy(obj));
        },
        [dispatch],
    );

    const handleAddProductToCart = React.useCallback(
        (obj) => {
            dispatch(addProductToCart(obj));
        },
        [dispatch],
    );

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    // прокидываем индекс в редакс для будущей сортировки
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все товары</h2>
            <div className="content__items">
                {isLoaded ? (
                    items.map((obj) => (
                        <ProductBlock
                            onClickAddProduct={handleAddProductToCart}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj}
                        />
                    ))
                ) : (
                    <Preloader />
                )}
            </div>
        </div>
    );
});

export default Home;
