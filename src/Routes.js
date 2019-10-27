import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';


const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path='/' render={() => <Main />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;