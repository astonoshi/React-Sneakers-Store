import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import { ButtonContainer} from './Button'
import styled from 'styled-components'



export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
          </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ms-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus' />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav` 
background: var(--mainBlue);
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.8rem;
  text-transform: capitalize;
}

`;



