import FormActiontypes from "./action-types";

const initialState = {
  dataEntrega: null,
  stepAtual: 1,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FormActiontypes.SAVE_DATA:
      return { ...state, dataEntrega: action.payload };

    case FormActiontypes.CHANGE_STEP:
      return { ...state, stepAtual: action.payload };

    case FormActiontypes.RESET_DATA:
      return { ...state, dataEntrega: null };

    case FormActiontypes.SAVE_DATA_REF_ENTREGA:
      return { ...state, dataEntregaRef: action.payload };

    default:
      return state;
  }
};

export default formReducer;
