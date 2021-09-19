import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctors from './components/AddDoctors/AddDoctors';
import DoctorDisplay from './components/DoctorDisplay/DoctorDisplay';
import ContactBlog from './components/ContactUsBlog/ContactBlog';
import ReviewsBlog from './components/ReviewsBlog/ReviewsBlog';

export const doctorContext = createContext();
function App() {
  const [logInUser, setLogInUser] = useState(false);
  return (
    <doctorContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Appointment/Dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Appointment/AllPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/Appointment/AddDoctors">
            <AddDoctors></AddDoctors>
          </Route>
          <PrivateRoute path="/Appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/ContactUs">
            <ContactBlog></ContactBlog>
            </Route>
            <Route path="/Testmonials">
        <ReviewsBlog></ReviewsBlog>
            </Route>
            <Route path="/Doctors">
    <DoctorDisplay></DoctorDisplay>
            </Route>
          <Route path="/*">
       <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </doctorContext.Provider>
  );
}

export default App;
