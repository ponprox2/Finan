  const initialState = {
    items: [],
    phone: '',
    OTP: '',
    statusSort: 1,
    listPhoneBanned: [],
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
        const data = [...payload.items];
        const statusSort = payload.statusSort;
        if (statusSort === 0) {
          data.sort((a, b) => b.create_At - a.create_At);
        } else if (statusSort === 1) {
          data.sort((a, b) => b.price - a.price);
        } else if (statusSort === 2) {
          data.sort((a, b) => a.price - b.price);
        } else if (statusSort === 3) {
          data.sort((a, b) => a.name.localeCompare(b.name));
        }
        return {...state, items: data, statusSort: statusSort};
      case 'UPDATE_PHONENUMBER_BAN':
        return {
          ...state,
          listPhoneBanned: [...state.listPhoneBanned, payload.phoneBan],
        };
      default:
        return state;
    }
  }
