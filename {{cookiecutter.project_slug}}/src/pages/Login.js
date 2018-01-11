import { Button, Grid, Paper, Tab, Tabs, TextField, Typography, withStyles } from 'material-ui';
import { Assignment, VpnKey } from 'material-ui-icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLoginTab, setLoginTab } from '../ducks/login';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  grid: {
    padding: 20,
  },
  textField: {
    width: 300,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(event, value) {
    this.props.setTab(value);
  }

  renderLogin() {
    return [
      <Grid item xs={12} key="login-user">
        <TextField
          id="user"
          label="Usuario"
          margin="normal"
          className={this.props.classes.textField}
        />
      </Grid>,
      <Grid item xs={12} key="login-password">
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          margin="normal"
          className={this.props.classes.textField}
        />
      </Grid>,
      <Grid item container justify="flex-end" align="flex-end" key="login-button">
        <Grid item>
          <Button raised color="primary">
            Acceder
          </Button>
        </Grid>
      </Grid>,
    ];
  }

  renderRegister() {
    return [
      <Grid item xs={12} key="register-user">
        <TextField
          id="user"
          label="Usuario"
          margin="normal"
          className={this.props.classes.textField}
        />
      </Grid>,
      <Grid item xs={12} key="register-password">
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          margin="normal"
          className={this.props.classes.textField}
        />
      </Grid>,
      <Grid item container justify="flex-end" align="flex-end" key="register-button">
        <Grid item>
          <Button raised color="primary">
            Registrarse
          </Button>
        </Grid>
      </Grid>,
    ];
  }

  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Tabs
          value={this.props.tabSelected}
          fullWidth
          indicatorColor="primary"
          textColor="primary"
          onChange={this.onTabChange}
        >
          <Tab icon={<VpnKey>shopping_cart</VpnKey>} label="Acceder" />
          <Tab icon={<Assignment>local_florist</Assignment>} label="Registrarse" />
        </Tabs>
        <Grid
          className={this.props.classes.grid}
          container
          spacing={8}
          direction="column"
          justify="center"
        >
          <Grid item xs={12}>
            <Typography type="display1" color="primary">
              {{ cookiecutter.project_name }}
            </Typography>
          </Grid>
          {this.props.tabSelected === 0 && this.renderLogin()}
          {this.props.tabSelected === 1 && this.renderRegister()}
        </Grid>
      </Paper>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  setTab: PropTypes.func.isRequired,
  tabSelected: PropTypes.number.isRequired,
};

const LoginWithStyles = withStyles(styles)(Login);

const mapStateToProps = state => ({
  tabSelected: selectLoginTab(state),
});

const mapDispatchToProps = {
  setTab: setLoginTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithStyles);
