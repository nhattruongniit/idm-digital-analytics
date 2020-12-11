const SET_PAGE_NUMBER = 'PROJECT___PROJECT_PAGINATION___PROJECT_SET_PAGE_NUMBER';
const SET_ITEMS_PER_PAGE = 'PROJECT___PROJECT_PAGINATION___PROJECT_SET_ITEMS_PER_PAGE';

export const setPageNumber = (pageNumber) => ({
  type: SET_PAGE_NUMBER,
  payload: { pageNumber },
});

export const setItemsPerPage = itemsPerPage => ({
  type: SET_ITEMS_PER_PAGE,
  payload: { itemsPerPage },
});

export default function reducer(state = {
  pageNumber: 1,
  itemsPerPage: 10,
}, action) {
  switch (action.type) {
    case SET_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
      };
    }

    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: action.payload.itemsPerPage
      };
    }

    default:
      return state;
  }
}