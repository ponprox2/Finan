const initialState = {
  items: [],
};

export default function actionInfoReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        items: [...state.items, payload.data],
      };
    default:
      return state;
  }
}
