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
    {title: 'Photoshop', show: true},
    {title: 'AWS', show: true},
    {title: 'WordPress 4+', show: true},
    {title: 'WordPress VIP', show: true},
    {title: 'Rails 4', show: true}, 
    {title: 'Ruby 2', show: true}, 
    {title: 'Javascript ES5 & 6', show: true},
    {title: 'Phonegap/Cordova', show: true},
    {title: 'jQuery', show: true},
    {title: 'Underscore.js', show: true},
    {title: 'Angular.js', show: true},
    {title: 'React.js', show: true},
    {title: 'Express.js', show: true},
    {title: 'Node.js ', show: true},
    {title: 'Socket.io', show: true},
    {title: 'Grunt', show: true},
    {title: 'Gulp', show: true},
    {title: 'Webpack', show: true},
    {title: 'Bower', show: true},
    {title: 'Vagrant', show: true},
    {title: 'Yeoman', show: true},
    {title: 'Bootstrap', show: true},
    {title: 'Zurb Foundation', show: true},
    {title: 'Stylus ', show: true},
    {title: 'SASS ', show: true},
    {title: 'HAML ', show: true},
    {title: 'HTML5/CSS 3', show: true},
    {title: 'Ajax and API’s', show: true},
    {title: 'Git', show: true},
    {title: 'SVN', show: true}
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
