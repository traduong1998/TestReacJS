import { Route, Redirect, Router, Switch } from 'react-router-dom';
// utils
import history from './utils/history';
// components

import DefaultLayout from './components/layouts/DefaultLayout';

import LoginPage from './pages/Login';
import ProductListPage from './pages/ProductList';

// const user = localStorage.getItem('userInfor');
// console.log(user);
// const PrivateRoute = ({ component: Component, ...rest }) => 
// (  
//   <Route {...rest} render={props => 
//   (
//     localStorage.getItem('userInfo') !== null ? <Component {...props} /> : <Redirect to={{pathname: '/login'}}/>
//   )}/>
// );

function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        {/* <PrivateRoute exact path="/products" component={ProductListPage} /> */}
        <DefaultLayout exact path="/login" component={LoginPage} />
        <DefaultLayout exact path="/productlist" component={ProductListPage} />
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
