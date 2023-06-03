import UserActiontypes from "./action-type";

export const registraUsuario = (payload) => ({
  type: UserActiontypes.REGISTRA_USER,
  payload,
});
export const logaUsuario = (payload) => ({
  type: UserActiontypes.LOGA_USER,
  payload,
});
export const mudaForm = (payload) => ({
  type: UserActiontypes.MUDA_FORM,
  payload,
});
