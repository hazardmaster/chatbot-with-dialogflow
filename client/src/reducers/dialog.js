import { GET_DIALOG, DIALOG_ERROR, CLEAR_DIALOG } from '../actions/types';

const initialState = {
  dialogs: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DIALOG:
      return {
        ...state,
        dialogs: [...state.dialogs, payload],
        loading: false,
      };
    case DIALOG_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_DIALOG:
      return {
        ...state,
        dialogs: null,
        loading: false,
      };
    default:
      return state;
  }
}
