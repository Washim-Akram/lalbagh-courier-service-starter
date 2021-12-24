import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Enroll from "./components/Enroll/Enroll";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotFound from './components/NotFound/NotFound';
import OurServices from "./components/OurServices/OurServices";
import Packages from "./components/Packages/Packages";
import Registration from "./components/Registration/Registration";
import AuthProvider from "./contexts/AuthProvider";


function App() {
  return (
    <div>
       <AuthProvider>
          <Router>
            <NavigationBar></NavigationBar>
            <Switch>

              <Route exact path = "/">
                <Home></Home>
              </Route>

              <Route exact path = "/home">
                <Home></Home>
              </Route>

              <Route exact path="/registration">
                <Registration></Registration>
              </Route>

              <Route exact path="/login">
                <Login></Login>
              </Route>

              <PrivateRoute path="/enroll/:serviceId">
                <Enroll></Enroll>
              </PrivateRoute>


              <PrivateRoute path="/packages">
                <Packages></Packages>
              </PrivateRoute>


              <Route exact path = "/about">
                <About></About>
              </Route>

              <Route exact path = "/contact">
                <Contact></Contact>
              </Route>

              <Route exact path="/ourServices">
                <OurServices></OurServices>
              </Route>

              <Route path = "*">
                <NotFound></NotFound>
              </Route>
              
            </Switch>
            <Footer></Footer>
          </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
