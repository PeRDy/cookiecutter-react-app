import {
  selectLoginErrorGeneric,
  selectLoginPassword,
  selectLoginUsername,
  setLoginPassword,
  setLoginUsername
} from 'ducks/login';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

const defaultProps = {
  error: null,
};

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Hello world!</p>
      </div>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapStateToProps = state => ({
  username: selectLoginUsername(state),
  password: selectLoginPassword(state),
  error: selectLoginErrorGeneric(state),
});

const mapDispatchToProps = {
  setUsername: setLoginUsername,
  setPassword: setLoginPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
