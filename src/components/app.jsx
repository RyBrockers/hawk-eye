import React from 'react';
import NavBar from './navbar';
import SignUp from '../components/sign-up';
import { Switch, Route } from 'react-router-dom';
import ImagesComponent from './ImagesComponent';
import UploadImage from '../../src/components/uploadImageComponent';
import Login from '../components/login';
import TokenManager from '../utils/token-manager';
import AuthRoute from './auth-route';
import Profile from './profile';
import '../Styles/app.scss';
import ImageCardComponent from './imageCardComponent';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  handleLogin = () => {
    this.setState({ user: TokenManager.getTokenPayload() });
  };

  handleLogout = () => {
    TokenManager.removeToken();
    this.setState({ user: null });
  };

  isLoggedIn = () => {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  };

  render() {
    return (
      <React.Fragment>

        <NavBar
          isLoggedIn={this.isLoggedIn()}
          user={this.state.user}
          onLogout={this.handleLogout}
        />

        <Switch>
          <Route
            path="/images/:id"
            render={props => (
              <ImageCardComponent {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} onLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/sign-up"
            component={SignUp}
          />
          <Route
            exact
            path="/profile"
            render={props => (
              <Profile
                {...props}
                onLogout={this.handleLogout}
                user={this.state.user}
                isLoggedIn={this.isLoggedIn()}
              />
            )}
          />
          <AuthRoute
            exact
            path="/upload-images"
            component={UploadImage}
            authenticate={this.isLoggedIn}
          />
          <AuthRoute
            exact
            path="/images"
            component={ImagesComponent}
            authenticate={this.isLoggedIn}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
