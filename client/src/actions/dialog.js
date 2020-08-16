import axios from 'axios';
import { GET_DIALOG, DIALOG_ERROR, CLEAR_DIALOG } from '../actions/types';

export const getDialogResponse = (text) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ text });

  try {
    const res = await axios.post('/api/df_text_query', body, config);
    const results = {
      user: res.data.queryText,
      bot: res.data.fulfillmentText,
    };
    dispatch({
      type: GET_DIALOG,
      payload: results,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: DIALOG_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};
