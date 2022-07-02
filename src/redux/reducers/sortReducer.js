const initialState = {
  statusSort: '',
};

export default function actionInfoReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'SORT_PRODUCT':
      return {
        ...state,
        statusSort: payload.value,
      };

    default:
      return state;
  }
}
