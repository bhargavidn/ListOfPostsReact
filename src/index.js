import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostList from './posts';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <PostList />
    
    </div>, document.getElementById('root'));
registerServiceWorker();
