import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Message = ({ dialog: { loading, dialogs } }) => {
  console.log(dialogs);
  return (
    !loading &&
    dialogs.map((item) => (
      <div style={{ marginLeft: '30px' }}>
        <div className='notification'>
          <div className='time green'>
            <div className='timeBody hidden-xs'>5 minutes ago</div>
            <div className='timeArrow hidden-xs'>
              <span className='fa fa-caret-right'></span>
            </div>
            <div className='indicator'>
              <span className='fa fa-envelope'></span>
            </div>
            <div className='notifyArrow'>
              <span className='fa fa-caret-left'></span>
            </div>
          </div>
          <div className='notifyContent'>
            <div className='notifyBody'>
              <div className='notifyRound notifyRound-yellow fa fa-envelope-o'></div>
              <div className='notify pull-left'>
                <div className='name'>
                  Me
                  <span className='label label-green visible-xs'>
                    5 minutes ago
                  </span>
                </div>
                <div className='message'>{item.user}</div>

                <div className='clearfix'></div>
              </div>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='notification'>
          <div className='time yellow'>
            <div className='timeBody hidden-xs'>2 hours ago</div>
            <div className='timeArrow hidden-xs'>
              <span className='fa fa-caret-right'></span>
            </div>
            <div className='indicator'>
              <span className='fa fa-paper-plane-o'></span>
            </div>
            <div className='notifyArrow'>
              <span className='fa fa-caret-left'></span>
            </div>
          </div>

          <div className='notifyContent'>
            <div className='notifyBody'>
              <div className='notifyRound notifyRound-yellow fa fa-paper-plane-o'></div>
              <div className='notify pull-left'>
                <div className='name'>
                  Mentor
                  <span className='label label-yellow visible-xs'>
                    2 hours ago
                  </span>
                </div>
                <div className='message'>{item.bot}</div>

                <div className='clearfix'></div>
              </div>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
      </div>
    ))
  );
};

Message.propTypes = {
  dialog: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dialog: state.dialog,
});

export default connect(mapStateToProps)(Message);
