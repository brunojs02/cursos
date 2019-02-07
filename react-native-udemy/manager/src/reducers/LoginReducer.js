import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  senha: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, senha: payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: payload, loading: false };
    case LOGIN_USER_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};