import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const filterRef = React.useRef();

    const activeLabel = items.find((item) => item === items[activeCategory]);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick_category = React.useCallback((e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(filterRef.current)) {
            setVisiblePopup(false);
        }
    }, []);

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick_category);
    }, [handleOutsideClick_category]);
    return (
        <div className="categories-wrapper">
            <div className="categories">
                <ul>
                    <li
                        className={activeCategory === null ? 'active' : ''}
                        onClick={() => onClickCategory(null)}>
                        Все
                    </li>
                    {items.map((item, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={`${item}_${index}`}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                ref={(ref) => {
                    filterRef.current = ref;
                }}
                className="sort">
                <div className="sort__label">
                    <b>Брэнды:</b>
                    <div className="sort__selector">
                        <span onClick={toggleVisiblePopup}>
                            {activeLabel ? activeLabel : 'Все'}
                        </span>
                        <svg
                            className={classNames('sort__arrow', { rotated: visiblePopup })}
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                fill="#2C2C2C"
                            />
                        </svg>
                    </div>
                </div>
                {visiblePopup && (
                    <div className="sort__popup">
                        <ul>
                            <li
                                className={activeCategory === null ? 'active' : ''}
                                onClick={() => {
                                    onClickCategory(null);
                                    setVisiblePopup(false);
                                }}>
                                Все
                            </li>
                            {items.map((item, index) => (
                                <li
                                    className={activeCategory === index ? 'active' : ''}
                                    onClick={() => {
                                        onClickCategory(index);
                                        setVisiblePopup(false);
                                    }}
                                    key={`${item}_${index}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
};

export default Categories;
