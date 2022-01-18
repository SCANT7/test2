const SET_LOGIN = "SET_LOGIN";
const SET_PASSWORD = "SET_PASSWORD";

let initialState = {
  login: "dev",
  password: "123",
};

const loginReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_LOGIN: {
      return { ...state, login: action.payload };
    }
    case SET_PASSWORD: {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
};

export const passwordAction = (text) => ({
  type: SET_PASSWORD,
  payload: text,
});

export const loginAction = (text) => ({
  type: SET_LOGIN,
  payload: text,
});

export default loginReducer;
