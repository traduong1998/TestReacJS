import { connect } from 'react-redux';

import history from '../../../utils/history';
import logo from '../../../images/logo.png'

import { Menu, Dropdown } from 'antd';

import {
  Nav,
  NavLink,
  NavMenu,
  NavSearch,
  SearchInput,
  SearchBtn,
  SearchIcon,
  NavLinkImg,
  LinkItem,
  HeaderContainer,
  Avatar,
  Img,
  MenuMobile,
  HomeIcon,
  ProductIcon
} from './HeaderElements';

function Header({ userInfo }) {

  function handleLogout() {
    localStorage.removeItem("userInfo");
    history.push('/login');
    window.location.reload();
  }
  const menu = (
    <Menu>
      {/* <Menu.Item>
        <LinkItem to='/profile'>
          Thông tin cá nhân
        </LinkItem>
      </Menu.Item> */}
      <Menu.Item>
        <LinkItem onClick={() => { handleLogout() }} to='/' >
          Đăng xuất
        </LinkItem>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <HeaderContainer>
        <Nav>
          <NavLinkImg to='/'>
            <Img
              src={logo}
              onClick={() => { history.push('/') }}
            />
          </NavLinkImg>
          <NavSearch>
            <SearchInput
              placeholder='Tìm kiếm'
            />
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
          </NavSearch>
          <NavMenu>
            <NavLink to='/productlist' >
              Trang chủ
            </NavLink>
            <NavLink to='/productlist' >
              Động vật
            </NavLink>
            <NavLink to='/about' >
              Giới thiệu
            </NavLink>
            {userInfo.data.id
              ? (
                <NavLink onClick={() => { handleLogout() }} to='/' >
                  <Dropdown overlay={menu} placement="topRight" arrow>
                    <Avatar />
                  </Dropdown>
                  {userInfo.data.name} 
                </NavLink>
              )
              :
              <NavLink to='/login'>
                Đăng nhập
          </NavLink>
            }
          </NavMenu>
          <div></div>
        </Nav>
        <MenuMobile>
          <NavLink to = '/'>
            <HomeIcon />
          </NavLink>
          <NavLink to='/productlist'>
            <ProductIcon/>
          </NavLink>
          <NavLink to='/profile'>
            <Avatar/>
          </NavLink>
        </MenuMobile>
      </HeaderContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  const { userInfo } = state.userReducer;
  return {
    userInfo,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addSearchProduct: (params) => dispatch(addSearchProductAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);