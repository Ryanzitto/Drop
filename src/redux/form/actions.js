import FormActiontypes from "./action-types";

export const saveData = (payload) => ({
  type: FormActiontypes.SAVE_DATA,
  payload,
});
export const changeStep = (payload) => ({
  type: FormActiontypes.CHANGE_STEP,
  payload,
});
export const resetData = () => ({
  type: FormActiontypes.RESET_DATA,
});
export const saveDataEntregaRef = (payload) => ({
  type: FormActiontypes.SAVE_DATA_REF_ENTREGA,
  payload,
});
