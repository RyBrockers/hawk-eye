import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faUserCircle,
  faImages,
  faUpload,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import '../Styles/navbar.scss';

const NavBar = ({ isLoggedIn }) => {
  return (
    <header>
      <h1>HawkEye</h1>
      <nav className="nav">
        {
          isLoggedIn ?
            (
              <React.Fragment>
                <Link to="/images">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faImages}
                  />
                </Link>
                <Link to="/upload-images">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faUpload}
                  />
                </Link>
                <Link to="/profile">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faUserCircle}
                  />
                </Link>
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                <Link to="/login">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faSignInAlt}
                  />
                </Link>
                <Link to="/sign-up">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faUserPlus}
                  />
                </Link>
              </React.Fragment>
            )
        }
      </nav>
    </header>
  );
};

export default NavBar;
