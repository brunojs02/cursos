import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  senha: '',
  user: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, senha: payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: payload };
    default:
      return state;
  }
};