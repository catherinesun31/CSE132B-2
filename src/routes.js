import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import Login from './components/entry/Login';
import SignUp from './components/entry/SignUp';
import RenterPage from './components/renter/RenterPage';
import OfficePage from './components/office/OfficePage';
import Group from './components/renter/Group';
import ChooseApt from './components/renter/ChooseApt';
import Apt from './components/renter/Apt';
import AppTurnin from './components/renter/AppTurnin';
import Deposit from './components/renter/Deposit';
import Utilities from './components/renter/Utilities';
import RentInsur from './components/renter/RentInsur';
import IdTurnin from './components/renter/IdTurnin';
import SignLease from './components/renter/SignLease';
import AppTurninApv from './components/office/AppTurninApv';
import DepositApv from './components/office/DepositApv';
import UtilitiesApv from './components/office/UtilitiesApv';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="login" component={Login} />
    <Route path="signup" component={SignUp} />
    <Route path="renter" component={RenterPage} />
    <Route path="office" component={OfficePage} /> 
    <Route path="group" component={Group} />
    <Route path="choose-apt" component={ChooseApt} />
    <Route path="apt" component={Apt} />
    <Route path="app-turnin" component={AppTurnin} />
    <Route path="deposit" component={Deposit} />
    <Route path="utilities" component={Utilities} />
    <Route path="rent-insur" component={RentInsur} />
    <Route path="id-turnin" component={IdTurnin} />
    <Route path="sign-lease" component={SignLease} />
    <Route path="app-turnin-apv" component={AppTurninApv} />
    <Route path="deposit-apv" component={DepositApv} />
    <Route path="utilities-apv" component={UtilitiesApv} />
  </Route>
);
