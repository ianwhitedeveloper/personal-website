import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
// import { Router, Route } from 'react-router';
import configureStore from '../store/configureStore';
import App from './App';

const store = configureStore();

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
