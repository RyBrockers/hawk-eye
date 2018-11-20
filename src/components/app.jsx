import React from 'react';
import NavBar from './navbar';
// import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <Switch>
        </Switch> */}
      </React.Fragment>
    );
  }
}

export default App;
