import { ADD_USER } from '../actions/user';

const initialState = {
  userName: '',
  userEmail: '',
};

export default function user(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_USER:
    return payload;
  default:
    return state;
  }
}
