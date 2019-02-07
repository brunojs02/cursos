import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  senha: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, senha: payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
};