// import { useEffect } from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import './App.css';
import {
  getUserInfoAction
} from './redux/actions/user.action';

function App({ getUserInfo }) {
  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  //   if (userInfo && userInfo.id) {
  //     getUserInfo({ id: userInfo.id });
  //   }
  // }, [])

  return (
    <div>
      <Router />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (params) => dispatch(getUserInfoAction(params)),
  };
}

export default connect(null, mapDispatchToProps)(App);
