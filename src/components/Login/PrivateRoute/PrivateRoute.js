import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { doctorContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [logInUser, setLogInUser] =useContext(doctorContext)
    const value=sessionStorage.getItem('email');
  //  setLogInUser(value);
    return (
        <Route
      {...rest}
      render={({ location }) =>
       logInUser || value ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;