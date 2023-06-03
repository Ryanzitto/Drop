import UserActiontypes from "./action-type";

const initialState = {
  user: [],
  isLogged: false,
  qualForm: "Cadastro",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActiontypes.REGISTRA_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserActiontypes.LOGA_USER:
      return {
        ...state,
        isLogged: true,
        tokens: action.payload,
      };

    case UserActiontypes.MUDA_FORM:
      return { ...state, qualForm: action.payload };
    default:
      return state;
  }
};

export default userReducer;
