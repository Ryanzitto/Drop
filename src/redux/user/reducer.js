import UserActiontypes from "./action-type";

const initialState = {
  isLogged: false,
  qualForm: "Cadastro",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActiontypes.LOGA_USER:
      return {
        ...state,
        isLogged: true,
        qualForm: "Cadastro",
        tokens: action.payload,
      };
    case UserActiontypes.DESLOGA_USER:
      return {
        ...state,
        isLogged: false,
        tokens: null,
      };

    case UserActiontypes.MUDA_FORM:
      return { ...state, qualForm: action.payload };

    default:
      return state;
  }
};

export default userReducer;
