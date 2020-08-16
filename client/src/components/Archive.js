import React from 'react';

const Archive = () => (
  <div className='col-lg-6'>
    <div className='commentsWidget'>
      <h5>
        <span className='badge'>4</span> Comments
      </h5>
      <div className='comment'>
        <div className='commentAvatar'>
          <img className='avatar' src='images/avatar-3.png' alt='avatar' />
          <div className='commentArrow'>
            <span className='fa fa-caret-left'></span>
          </div>
        </div>
        <div className='commentContent'>
          <div className='commentName'>Rust Cohle</div>
          <div className='commentBody'>
            It is a long established fact that a reader will be distracted by
            the readable content
          </div>
          <div className='commentActions'>
            <div className='commentTime'>
              <span className='icon-clock'></span> 1 day ago
            </div>
            <ul>
              <li>
                <a href='#'>
                  <span className='icon-action-undo'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-like'></span> 13
                </a>
              </li>
            </ul>
            <div className='clearfix'></div>
          </div>
        </div>
        <div className='clearfix'></div>
      </div>
      <div className='comment reply'>
        <div className='commentAvatar'>
          <img className='avatar' src='images/avatar-1.png' alt='avatar' />
          <div className='commentArrow'>
            <span className='fa fa-caret-left'></span>
          </div>
        </div>
        <div className='commentContent'>
          <div className='commentName'>John Smith</div>
          <div className='commentBody'>
            Comment posted by me. I have the power to remove it.
          </div>
          <div className='commentActions'>
            <div className='commentTime'>
              <span className='icon-clock'></span> 2 hours ago
            </div>
            <ul>
              <li>
                <a href='#'>
                  <span className='fa fa-trash-o'></span>
                </a>
              </li>
            </ul>
            <div className='clearfix'></div>
          </div>
        </div>
        <div className='clearfix'></div>
      </div>
      <div className='comment'>
        <div className='commentAvatar'>
          <img className='avatar' src='images/avatar-5.png' alt='avatar' />
          <div className='commentArrow'>
            <span className='fa fa-caret-left'></span>
          </div>
        </div>
        <div className='commentContent'>
          <div className='commentName'>Alex Rogers</div>
          <div className='commentBody'>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </div>
          <div className='commentActions'>
            <div className='commentTime'>
              <span className='icon-clock'></span> 20 minutes ago
            </div>
            <ul>
              <li>
                <a href='#'>
                  <span className='icon-action-undo'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-like'></span> 13
                </a>
              </li>
            </ul>
            <div className='clearfix'></div>
          </div>
        </div>
        <div className='clearfix'></div>
      </div>
      <div className='comment'>
        <div className='commentAvatar'>
          <img className='avatar' src='images/avatar-2.png' alt='avatar' />
          <div className='commentArrow'>
            <span className='fa fa-caret-left'></span>
          </div>
        </div>
        <div className='commentContent'>
          <div className='commentName'>Jane Smith</div>
          <div className='commentBody'>
            Lorem ipsum dolor sit amet, consecteter adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet
          </div>
          <div className='commentActions'>
            <div className='commentTime'>
              <span className='icon-clock'></span> 5 minutes ago
            </div>
            <ul>
              <li>
                <a href='#'>
                  <span className='icon-action-undo'></span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon-like'></span> 13
                </a>
              </li>
            </ul>
            <div className='clearfix'></div>
          </div>
        </div>
        <div className='clearfix'></div>
      </div>
    </div>
  </div>
);
export default Archive;
