import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import "./style.css";

import {
  getCategoryListAction,
  getProductListAction,
} from '../../redux/actions';

import ItemProduct from './components/ItemProduct'
import { useHistory } from 'react-router-dom';

function ProductListPage({
  getCategoryList,
  getProductList,
  categoryList,
  productList,
}) {

  const [categorySelected, setCategorySelected] = useState(null);
  const [page, setPage] = useState(1);
  // const userLogin = localStorage.getItem('userInfor');
  // const history = useHistory();

  // useEffect(() => {
  //   if(userLogin === null){
  //     history.push('/login');
  //   }
  // }, [userLogin]);

  useEffect(() => {
    getCategoryList({});
    getProductList({
      page: 1,
      limit: 6,
    });
  }, []);
  

  function handleFilterCategory(id) {
    setCategorySelected(id);
    setPage(1)
    getProductList({
      page: 1,
      limit: 6,
      categoryId: id,
    });
  }

  function handleShowMoreProduct() {
    getProductList({
      more: true,
      page: page + 1,
      limit: 6,
      categoryId: categorySelected,
    });
    setPage(page + 1);
  }

  function renderCategory() {
    return categoryList.data.map((item) => {
      if (item.status === 'on') {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3
              onClick={() => handleFilterCategory(item.id)}
              style={{
                color: categorySelected === item.id ? '#e91e63' : 'RGBA(0,0,0,0.6)',
                borderBottom: categorySelected === item.id ? '#e91e63 1px solid' : '#e91e63',
                padding: '0px 16px',
                cursor: 'pointer'
              }}
            >
              {item.name}
            </h3>
          </div>
        )
      }
    })
  }

  function renderProductList() {
    if (productList.load) return <p>Loading...</p>;
    return productList.data.map((productItem) => {
      if (productItem.category.status === 'on') {
        return (
          <ItemProduct
            title={productItem.name}
            img={productItem.img[0]}
            id={productItem.id}
          />
        )
      }
    })
  }

  return (
    <div className='product-container'
      style={{ maxWidth: '1240px', margin: '16px auto 16px', minHeight: '90vh' }}>
      <Row 
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        className='menu-option'
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3
            onClick={() => handleFilterCategory(null)}
            style={{
              color: categorySelected === null ? '#e91e63' : 'RGBA(0,0,0,0.6)',
              borderBottom: categorySelected === null ? '#e91e63 1px solid' : null,
              padding: '0px 16px',
              cursor: 'pointer'
            }}
          >
            Tất cả
          </h3>
        </div>
        {renderCategory()}
      </Row>
      <Row 
        gutter={[16  , 16]}
        className='list-product'
      >
        {renderProductList()}
      </Row>
      <div style={{
        display: productList.data.length % 6 !== 0 ? 'none' : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div
          className='btn-see-more'
          onClick={() => handleShowMoreProduct()}
        >
          {productList.load ? 'Đang tải...' : 'Xem thêm'}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { categoryList, productList, searchValue } = state.productReducer;
  return {
    categoryList,
    productList,
    searchValue,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: (params) => dispatch(getProductListAction(params)),
    getCategoryList: (params) => dispatch(getCategoryListAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);