import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
// import { Router, Route } from 'react-router';
import configureStore from '../store/configureStore';
import App from './App';

//////////////////////////////////////////////////////////
// This temporary state is mocking what would come from //
// server side rendered state to rehydrate the client   //
//////////////////////////////////////////////////////////
let temporaryInitialState = {
  projects: [
    {
      title: 'UPS Houston',
      description: 'Sole developer yadda yadda yadda.......',
      url: 'https://houston.ups.com',
      imgSrc: 'http://25.media.tumblr.com/tumblr_lhlsz4Y90n1qc63sno1_500.jpg',
      likes: 0
    },
    {
      title: 'UPS Other',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      url: 'http://ups.com',
      imgSrc: 'http://25.media.tumblr.com/tumblr_lhlsz4Y90n1qc63sno1_500.jpg',
      likes: 0
    }
  ],
  skills: [
    {title: 'ruby', show: true},
    {title: 'Rubygroovy', show: true},
    {title: 'javascript', show: true},
    {title: 'ruby', show: true},
    {title: 'Rubygroovy', show: true},
    {title: 'javascript', show: true},
    {title: 'ruby', show: true},
    {title: 'Rubygroovy', show: true},
    {title: 'javascript', show: true},
    {title: 'ruby', show: true},
    {title: 'Rubygroovy', show: true},
    {title: 'javascript', show: true},
    {title: 'ruby', show: true},
    {title: 'Rubygroovy', show: true},
    {title: 'javascript', show: true},
    {title: 'ruby', show: true},
    {title: 'Rubygroovy', show: true},
    {title: 'javascript', show: true},
    {title: 'html', show: true}
  ]
};

const store = configureStore(temporaryInitialState);

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() =>
            <App />
          }
        </Provider>
      </div>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
};
