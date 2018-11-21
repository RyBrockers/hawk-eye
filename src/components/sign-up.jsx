import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    axios.post('http://mcr-codes-image-sharing-api.herokuapp.com/users', this.state.fields)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  render() {
    return (
      <React.Fragment>
        <div className="sign-up">
          <h1>Sign Up</h1>
          <form
            onSubmit={this.handleSignUp}
          >
            <div className="sign-up_input">
              <label
                htmlFor="firstName"
              >
                first name:
              </label>
              <input
                name="firstName"
                type="text"
                value={this.state.fields.firstName}
                onChange={this.handleFieldChange}
                required
              />
            </div>
            <div className="sign-up_input">
              <label
                htmlFor="lastName"
              >
                last name:
              </label>
              <input
                name="lastName"
                type="text"
                value={this.state.fields.lastName}
                onChange={this.handleFieldChange}
                required
              />
            </div>
            <div className="sign-up_input">
              <label
                htmlFor="email"
              >
                email:
              </label>
              <input
                name="email"
                type="email"
                value={this.state.fields.email}
                onChange={this.handleFieldChange}
                required
              />
            </div>
            <div className="sign-up_input">
              <label
                htmlFor="password"
              >
                password:
              </label>
              <input
                name="password"
                type="password"
                value={this.state.fields.password}
                onChange={this.handleFieldChange}
                required
              />
            </div>
            <div className="sign-up_inpus">
              <button
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
