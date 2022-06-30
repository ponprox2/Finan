export const updateEmail = email => async dispatch => {
  try {
    dispatch({
      type: 'CAP_NHAP_EMAIL',
      email: email,
    });
  } catch (e) {
    console.log(e);
  }
};
export const updateAddress = address => async dispatch => {
  try {
    dispatch({
      type: 'CAP_NHAP_ADDRESS',
      address: address,
    });
  } catch (e) {
    console.log(e);
  }
};
