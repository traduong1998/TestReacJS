import { Col, Rate } from 'antd';
import '../style.css'

import history from '../../../utils/history';

function ItemProduct(props) {
  const { title, img, id } = props;
  return (
    <Col xl={8} md = {8} sm={12} xs = {24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="box" >
        <div className="slide-img">
          <img className = 'img-product' src={img}></img>
          <div className="overlay">
            <a onClick={() => history.push(`/product/${id}`)} className="buy-btn">Xem thêm</a>
          </div>
        </div>
        <div className="detail-box">
          <div className="type-name">
            <a onClick={() => history.push(`/product/${id}`)}>{title}</a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ItemProduct;