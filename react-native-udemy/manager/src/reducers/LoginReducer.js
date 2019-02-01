import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

export default (state = { email: '', senha: '' }, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, senha: payload };
    default:
      return state;
  }
};