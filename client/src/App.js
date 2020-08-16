import React, { Fragment, useState } from 'react';

import Archive from './components/Archive';
import Mentor from './components/Mentor';
import Slide from './components/Slide';

import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [displayMentor, setdisplayMentor] = useState(true);
  return (
    <Provider store={store}>
      <Fragment>
        <div className='row'>
          <Slide />
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='tabsContainer'>
              <ul className='nav nav-tabs nav-justified' role='tablist'>
                <li className=''>
                  <a
                    href='#home'
                    onClick={() => setdisplayMentor(true)}
                    role='tab'
                    data-toggle='tab'
                  >
                    <span className='icon-bubbles'></span>Mentoring
                  </a>
                </li>
                <li className=''>
                  <a
                    href='#profile'
                    onClick={() => setdisplayMentor(false)}
                    role='tab'
                    data-toggle='tab'
                  >
                    <span className='icon-user'></span>Archived Messages
                  </a>
                </li>
              </ul>
              <div className='tab-content'>
                <div className='tab-pane fade' id='profile'>
                  Archived messages
                </div>
                <div className='tab-pane fade' id='home'>
                  Dialogue
                </div>
              </div>
            </div>

            <div className='clearfix'></div>

            <div className='clearfix'></div>
          </div>
          {displayMentor ? <Mentor /> : <Archive />}
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
