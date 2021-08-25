import { call, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import axios from 'axios';
import history from '../../utils/history';

function* loginSaga(action) {
    try {
        const { email, password } = action.payload;
        const result = yield axios({
            method: 'GET',
            url: 'http://localhost:3001/users',
            params: {
                email,
                password,
            }
        });
        if (result.data.length > 0) {
            localStorage.setItem('userInfo', JSON.stringify(result.data[0]));
            console.log("🚀 ~ file: user.saga.js ~ line 50 ~ function*loginSaga ~ result.data[0]", result.data[0])
            yield put({
                type: "LOGIN_SUCCESS",
                payload: {
                    data: result.data[0],
                },
            });
            notification.success({
                message: 'Đăng nhập thành công!',
            });
            if (result.data[0].role === 'user') {
                yield history.push('/productlist');
                alert("Đăng nhập thành công");
            } else {
                yield history.push('/admin/');
            }
        } else {
            notification.error({
                message: 'Email hoặc mật khẩu không đúng!',
            });
            alert("Email hoặc mật khẩu không đúng!");
            yield put({
                type: "LOGIN_FAIL",
                payload: {
                    error: 'Email hoặc mật khẩu không đúng',
                },
            });
        }
    } catch (e) {
        yield put({
            type: "LOGIN_FAIL",
            payload: {
                error: e.error
            },
        });
    }
}

function* getUserInfoSaga(action) {
    try {
        const { id } = action.payload;
        const result = yield axios.get(`http://localhost:3001/users/${id}`);
        yield put({
            type: "GET_USER_INFO_SUCCESS",
            payload: {
                data: result.data,
            },
        });
    } catch (e) {
        yield put({
            type: "GET_USER_INFO_FAIL",
            payload: {
                error: e.error
            },
        });
    }
}

export default function* userSaga() {
  yield takeEvery('LOGIN_REQUEST', loginSaga);
  yield takeEvery('GET_USER_INFO_REQUEST', getUserInfoSaga);
}