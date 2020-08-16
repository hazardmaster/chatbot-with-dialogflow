import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Message from './Message';
import { getDialogResponse } from '../actions/dialog';

function Mentor({ getDialogResponse }) {
  const [formData, setformData] = useState({
    text: '',
  });

  const { text } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(text);

  const onSubmit = async (e) => {
    e.preventDefault();
    setformData({ text: '' });
    getDialogResponse(text);
  };

  return (
    <div className='col-lg-6' style={{ marginLeft: '30px' }}>
      <div className='notificationsWidget'>
        <h5>
          <span className='badge'>5</span> Notifications
        </h5>
        <Message />
        <form className='commentsForm' onSubmit={(e) => onSubmit(e)}>
          <div className='input-group'>
            <input
              type='text'
              name='text'
              value={text}
              onChange={(e) => onChange(e)}
              className='form-control'
              placeholder='Talk to Me...'
            />
            <span className='input-group-btn'>
              <a className='btn btn-green'>Post</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

Mentor.propTypes = {
  getDialogResponse: PropTypes.func.isRequired,
};

export default connect(null, { getDialogResponse })(Mentor);

// class Mentor extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             messages:[]
//         }
//     }

//    async df_text_query(text){
//     let says = {
//         speaks : 'me',
//         msg:{
//             text:{
//                 text:text
//             }
//         }
//     };
//     this.setState({ messages: [...this.state.messages, says]});
//        const res = await axios.post('/api/df_text_query',{text});

//        for (let msg of res.data.fulfillmentMessages) {
//         says = {
//             speaks: 'bot',
//             msg: msg
//         }
//         this.setState({ messages: [...this.state.messages, says]});
//     }

//     };

//     async df_event_query(event){
//         const res = await axios.post('/api/df_event_query',  {event});

//         for (let msg of res.data.fulfillmentMessages) {
//             let says = {
//                 speaks: 'bot',
//                 msg: msg
//             }

//             this.setState({ messages: [...this.state.messages, says]});
//         }
//     };
//     renderMessages(returnedMessages) {
//         if (returnedMessages) {
//             return returnedMessages.map((message, i) => {
//                     return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
//                 }
//             )
//         } else {
//             return null;
//         }
//     }

//     render(){
//         return(

//         )

//     }

// }
// export default Mentor;
