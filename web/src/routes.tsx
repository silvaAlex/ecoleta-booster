import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatPoint from './pages/CreatePoint';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatPoint} path="/create-point" />
    </BrowserRouter>
  );
};
export default Routes;
