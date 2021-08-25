import { FaCartPlus, FaSearch, FaUserCircle, FaHome,FaCarrot } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #008848;
  height: 80px;
  display: flex;
  justify-content: space-between;
  max-width: 1170px;
  margin: auto;
  z-index: 10;
  @media screen and (max-width: 768px) {
    height: 66px;
  }
`;

export const NavLinkImg = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`
export const Img = styled.img`
  height: 100%;
  padding: 8px 0px;
  @media screen and (max-width: 500px) {
    height: 60%;
  }
`

export const HeaderContainer = styled.div`
  background-color: #008848;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 110%;
  font-weight: 400;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #f8f8f8;
  }
`;

export const NavLinkCart = styled(Link)`
  color: #fff;
  display: none;
  align-items: center;
  text-decoration: none;
  font-size: 110%;
  font-weight: 400;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #f8f8f8;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    padding: 0 0;
    margin-right: 24px;
  }
`;

export const LinkItem = styled(Link)`
  color: #fff;
  &:hover {
    color: #f8f8f8;
  }
`


export const NavSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    margin-right: 4px;
  }
`;
export const SearchInput = styled.input`
    height: 40px;
    width: 100%;
    border: none;
    outline: none;
    background: #fff;
    font-size: 18px;
    border-radius: 50px;
    padding: 0 60px 0 20px;
    @media screen and (max-width: 450px) {
      font-size: 15px;
      height: 36px;
    }
`

export const SearchBtn = styled.div`
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    height: 36px;
    width: 36px;
    color: #fff;
    background: #d42c2c;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border-radius: 40px;
    cursor: pointer;
    &:hover {
      color: #a64141;
    }
    @media screen and (max-width: 450px) {
      font-size: 15px;
      height: 32px;
      height: 32px;
      width: 32px;
      right: 2px;
    }
`
export const SearchIcon = styled(FaSearch)`
`

export const Avatar = styled(FaUserCircle)`
  font-size:200%;
  color: #fff;
`
export const HomeIcon = styled(FaHome)`
  font-size:200%;
  color: #fff;
`
export const ProductIcon = styled(FaCarrot)`
  font-size:200%;
  color: #fff;
`
export const AmountContainer = styled.div`
  position: absolute;
  top: 18px;
  right: 28px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #d42c2c;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    top: 16px;
    right: 12px;
    width: 25px;
    height: 25px;
  }
`
export const TotalAmount = styled.div`
  color: #fff;
  margin-bottom: 0;
  font-size: 110%;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobile = styled.nav`
  background: #008848;
  height: 44px;
  position: fixed;
  bottom: 0;
  display: none;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  z-index: 999;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

