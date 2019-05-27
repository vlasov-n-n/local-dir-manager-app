import React, { Component } from 'react';
import {Provider} from 'react-redux';

import store from '../../redux';
import Home from '../Home';
import Modal from '../Modal'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
        <Modal/>
      </Provider>
    );
  }
}

export default App;
