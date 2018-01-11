import { createMuiTheme, MuiThemeProvider, Reboot } from 'material-ui';
import { green, brown } from 'material-ui/colors';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import configureStore from './store';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: brown,
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Reboot />
          <Login />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
