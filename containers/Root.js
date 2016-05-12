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
      description: 'Sole developer for this project. Worked collaboratively  with art, account and creative departments to bring this campaign to life. Utilized Grunt, Vagrant, Yeoman, Bootstrap, Javascript and jQuery on the front end. Integrated backend database and authentication technologies including Silverpop and Linkedin REST APIs. Fully responsive and browser compliant to IE8. Completed project on time and to full client satisfaction. Upon completion of this project, I created a Yeoman generator for the UPS development team so that future projects of this scope could be more quickly and efficiently developed. Code can be found here: https://github.com/ianwhitedeveloper/generator-webapp-vagrant',
      url: 'https://houston.ups.com',
      imgSrc: '../assets/images/houston.jpg',
      likes: 0
    },
    {
      title: 'UPS New Customer Welcome LP-US',
      description: 'Responsible for implementing redesign of UPS New Customer Welcome US landing page. WordPress, Bootstrap, Vagrant, Apache, Modernizr.'
,
      url: 'https://welcome.ups.com/#article=home',
      imgSrc: '../assets/images/ups-welcome.jpg',
      likes: 0
    },
    {
      title: 'UPS mDot',
      description: 'Principal front end developer/maintainer of UPS mdot site - a website utilized by many thousands of users each month. Parse creative specs numbering hundreds of pages to develop and maintain semantic HTML markup and interactivity leveraging Grunt, Bower, jQuery, and Bootstrap to be handed off to UPS back end engineers. Work has been routinely delivered on or before project deadlines.',
      url: 'https://m.ups.com/mDot/',
      imgSrc: '../assets/images/mdot.png',
      likes: 0
    },
    {
      title: 'UPS Healthcare',
      description: 'Another project where I was able to jump in and assist the team so the project could be finished by a tight deadline. Fully responsive and browser compliant to IE8. Developed many of the Javascript and CSS animations as well as other front end functionality seen throughout the pages on this site by utilizing jQuery, Bootstrap and TweenMax.',
      url: 'https://healthcare.ups.com/finding-efficiency-through-healthcare-supply-chain-management/',
      imgSrc: '../assets/images/healthcare.jpg',
      likes: 0
    }
  ],
  openSourceProjects: [
    {
      title: 'The Odin Project',
      description: 'Worked within the full stack of an existing Rails 4 codebase following an Agile workflow. Successfully implemented and exhaustively tested assigned project stories ranging from site-wide features to page specific content. Developed backend logic and frontend code. Worked extensively with Oauth. Experience with remote work, project management and pair programming via Google hangouts, Pivotal Tracker, Github and Nitrous.io',
      url: 'https://github.com/TheOdinProject/theodinproject/commits?author=ianwhitedeveloper',
      imgSrc: '../assets/images/odin.jpg',
      likes: 0
    },
    {
      title: 'Umbrella.js',
      description: 'Lightweight and intuitive Javascript library. Worked collaboratively with library author to implement wrap library method. My Contributions are fully documented and tested using Mocha/Chai. I leveraged TDD (Test Driven Development). Asset and test management via Grunt.',
      url: 'https://github.com/umbrellajs/umbrella/commits?author=ianwhitedeveloper',
      imgSrc: '../assets/images/umbrella.jpg',
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
    {title: 'NPM ', show: true},
    {title: 'Flexbox ', show: true},
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


