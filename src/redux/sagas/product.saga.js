import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getProductListSaga(action) {
  try {
    const { more, page, limit, categoryId, searchKey,searchValue } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/products',
      params: {
        _page: page,
        _limit: limit,
        ...categoryId && { categoryId },
        _expand: 'category',
        _sort : "id",
        _order: "desc",
        ...searchKey && { q: searchKey },
        ...searchValue && { q: searchValue },
      }
    });
    yield put({
      type: "GET_PRODUCT_LIST_SUCCESS",
      payload: {
        data: result.data,
        more
      },
    });
  } catch (e) {
    yield put({
      type: "GET_PRODUCT_LIST_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios({
      method: 'GET',
      url: `http://localhost:3001/products/${id}`,
      params: {
        _expand: 'category',
      }
    });
    yield put({
      type: "GET_PRODUCT_DETAIL_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({ type: "GET_PRODUCT_DETAIL_FAIL", message: e.message });
  }
}

function* getCategoryListSaga(action) {
  try {
    const {searchKey} = action.payload;
    const result = yield axios({
      method: 'GET',
      url: 'http://localhost:3001/categories',
      params : {
        ...searchKey && { q: searchKey },
      }
    });
    yield put({
      type: "GET_CATEGORY_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_CATEGORY_LIST_FAIL",
      payload: {
        error: e.error
      },
    });
  }
}
export default function* productSaga() {
  yield takeEvery('GET_PRODUCT_LIST_REQUEST', getProductListSaga);
  yield takeEvery('GET_PRODUCT_DETAIL_REQUEST', getProductDetailSaga);
  yield takeEvery('GET_CATEGORY_LIST_REQUEST', getCategoryListSaga);
}
