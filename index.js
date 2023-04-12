import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

function HeadlessCheck() {
  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
