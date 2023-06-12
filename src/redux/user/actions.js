import UserActiontypes from "./action-type";

export const logaUsuario = (payload) => ({
  type: UserActiontypes.LOGA_USER,
  payload,
});
export const mudaForm = (payload) => ({
  type: UserActiontypes.MUDA_FORM,
  payload,
});
export const deslogaUsuario = (payload) => ({
  type: UserActiontypes.DESLOGA_USER,
  payload,
});

