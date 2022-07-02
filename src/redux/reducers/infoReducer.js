const initialState = {
  items: [
    {
      costPrice: '',
      description: '',
      image: '',
      name: 'mi tom',
      price: '124',
    },
    {
      costPrice: '',
      description: '',
      image: '',
      name: 'banh mi',
      price: '123',
    },
  ],
  phone: '',
  OTP: '',
};

export default function actionInfoReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        items: [...state.items, payload.data],
      };
    case 'UPDATE_PHONE':
      return {
        ...state,
        phone: payload.phone,
      };
    case 'UPDATE_OTP':
      return {
        ...state,
        OTP: payload.OTP,
      };
    case 'SORT_PRODUCT':
      // console.log(payload.statusSort, payload?.items);
      if (payload.statusSort === 1) {
        payload.items?.sort((a, b) => b.price - a.price);
      } else if (payload.statusSort === 2) {
        payload.items?.sort((a, b) => a.price - b.price);
      } else if (payload.statusSort === 3) {
        payload.items?.sort((a, b) => b.name - a.name);
      }
      return {...state, items: payload?.items};
    default:
      return state;
  }
}
