import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

// асинхронный action
export const fetchProducts = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  // без переадресации был http://localhost:3001...
  axios
    .get(
      `/products?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setProducts(data));
    });
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});
