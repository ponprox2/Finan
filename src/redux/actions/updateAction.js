export const StatusSortProduct = statusSort => async dispatch => {
  try {
    dispatch({
      type: 'CAP_NHAP_EMAIL',
      email: email,
    });
  } catch (e) {
    console.log(e);
  }
};


export const SortProduct = statusSort => async dispatch => {
  try {
    dispatch({
      type: 'SORT_PRODUCT',
      email: email,
    });
  } catch (e) {
    console.log(e);
  }
};
