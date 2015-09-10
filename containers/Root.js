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
      description: 'Sole developer for this project. Worked collaboratively  with art, account and creative departments to bring this campaign to life. Utilized Grunt, Vagrant, Yeoman, Bootstrap, Javascript and jQuery on the front end. Integrated backend database and authentication technologies including Silverpop and Linkedin REST APIs. Fully responsive and browser compliant to IE8. Completed project on time and to full client satisfaction. Upon completion of this project, I created a Yeoman generator for the UPS development team so that future projects of this scope could be more quickly and efficiently developed. Code can be found here: https://github.com/Iawhite76/generator-webapp-vagrant',
      url: 'https://houston.ups.com',
      imgSrc: '../assets/images/houston.jpg',
      likes: 0
    },
    {
      title: 'UPS Peak',
      description: 'Developed of a majority of the front end styling based off Photoshop comps delivered by creative department. Fully responsive and browser compliant to IE8. Volunteered to join the team responsible for this site to help finish project during busy holiday season. I was able to quickly get up to speed and contribute helping to complete the project by the deadline.',
      url: 'https://wishesdelivered.ups.com/#all-wishes',
      imgSrc: '../assets/images/peak.jpg',
      likes: 0
    },
    {
      title: 'UPS mDot',
      description: 'Principal front end developer/maintainer of UPS mdot site - a website utilized by many thousands of users each month. Developed and maintained clean and semantic front end code based on creative specs numbering hundreds of pages to be handed off to UPS back end engineers. Work has been routinely delivered on or before project deadlines.',
      url: 'https://m.ups.com/mDot/',
      imgSrc: '../assets/images/mdot.png',
      likes: 0
    },
    {
      title: 'UPS Healthcare',
      description: 'Another project where I was able to jump in and assist the team so the project could be finished by a tight deadline. Fully responsive and browser compliant to IE8. Developed many of the Javascript and CSS animations as well as other front end functionality seen throughout the pages on this site.',
      url: 'https://healthcare.ups.com/finding-efficiency-through-healthcare-supply-chain-management/',
      imgSrc: '../assets/images/healthcare.jpg',
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


