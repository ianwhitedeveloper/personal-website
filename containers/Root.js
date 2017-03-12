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
      title: 'Beauty and the Beast LP',
      description: `Principal front end developer for the 2017 Beauty and the Beast Homeaway Landing Page. I was tasked with creating this Landing Page in a short amount of time from scratch. I worked closely and successfully coordinated with several teams including UX, marketing, analytics, and dev-ops. This was a very expensive and prominent campaign that turned out very well and went above and beyond the client's expectations. Tech stake included: Grunt, Handlbars, Require.js, jQuery, Less, NPM, Wistia.`,
      url: 'https://www.homeaway.com/lp/disney/',
      imgSrc: '../assets/images/batb.jpg',
      likes: 0
    },
    {
      title: '7 Election',
      description: 'Principal front end developer for the 2016 7 Election website. A partnership with The Onion all but guaranteed a large userbase. I created this site from scratch in the very tight deadline of 2.5 weeks. I was given mobile/desktop PSD comps and from that made a fully responsive site cross browser tested supporting back to IE10. All Javascript logic is written in ES6 (ECMA 2016) and completely modularized leveraging Browserify to bundle and transpile the code for the browser.  Heavy utilization of the following design patterns: Promises, Observer, Module. Other tech I used: stylus, gulp, jQuery 3.0, Google Map API (heavily customized), ES6 Promise Debounce, Babel, Browser Sync, Event Emitter 2, and Notie.',
      url: 'http://www.ianwhitedeveloper.com/7election/',
      imgSrc: '../assets/images/7election.jpg',
      likes: 0
    },
    {
      title: 'PHLUR LP',
      description: 'This was a project I took on as contract work. Very quick turnaround (less than 9 hrs total). I was tasked with taking an existing landing page and polishing the details to pixel perfection utilizing professional PSD design comps. Logically rearranged media queries for a fully responsive site experience. In addition to provided development services I consulted the client in front end best practices as well as assisted in deploying to Amazon S3. Tech I used in this project: gulp, Browser Sync, and stylus.',
      url: '/assets/images/phlur.jpg',
      imgSrc: '../assets/images/phlur.jpg',
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
      description: 'Worked collaboratively with library author to implement wrap and clone methods as well as fix append method. My Contributions are fully documented and tested using Mocha/Chai. I leveraged TDD (Test Driven Development). Asset and test management via Grunt.',
      url: 'https://github.com/umbrellajs/umbrella/graphs/contributors',
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
    {title: 'Umbrella.js', show: true},
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


