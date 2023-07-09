import * as React from 'react';
import Login from './pages/Login';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import Router from './router/Router';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <Router />
    );
  }
}

