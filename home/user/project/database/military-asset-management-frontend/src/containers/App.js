import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DashboardContainer from './DashboardContainer';
import PurchaseContainer from './PurchaseContainer';
import TransferContainer from './TransferContainer';
import AssignmentsContainer from './AssignmentsContainer';
import ExpendituresContainer from './ExpendituresContainer';
import LoginContainer from './LoginContainer';
import PrivateRoute from '../components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <PrivateRoute path="/dashboard" component={DashboardContainer} />
        <PrivateRoute path="/purchases" component={PurchaseContainer} />
        <PrivateRoute path="/transfers" component={TransferContainer} />
        <PrivateRoute path="/assignments" component={AssignmentsContainer} />
        <PrivateRoute path="/expenditures" component={ExpendituresContainer} />
        <Route path="/login" component={LoginContainer} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
