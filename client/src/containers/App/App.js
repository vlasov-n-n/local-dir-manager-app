import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Home from '../Home/Home';
import store from '../../redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

export default App;
