const initialState = {
  id: '',
  email: '',
  address: '',
  score: 0,
};

export default function actionInfoReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'CAP_NHAP_EMAIL':
      return {
        ...state,
        email: payload.email,
      };
    case 'CAP_NHAP_ID':
      return {
        ...state,
        id: payload.id,
      };
    case 'CAP_NHAP_ADDRESS':
      return {
        ...state,
        address: payload.address,
      };
    case 'CAP_NHAP_SCORE':
      return {
        ...state,
        score: payload.score,
      };

    default:
      return state;
  }
}
