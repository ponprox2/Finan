import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  items: [],
  phone: '',
  OTP: '',
};

const storeData = async phone => {
  try {
    await AsyncStorage.setItem('@Phone', phone);
  } catch (error) {}
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
    case 'CHECK_OTP':
      if (payload.OTP === '1234') return storeData(payload.phone);

    default:
      return state;
  }
}
