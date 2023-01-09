import React, {useRef} from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './styles/styleHeader.css'

const HeaderScreen = () => {

    const navbarOpen = useRef()


    const lineOneActive = useRef()
    const lineTwoActive = useRef()
    const lineThreeActive = useRef()

    const navigate = useNavigate()
    const location = useLocation()

    const navigateHome = () => {
      if(location.pathname === '/'){
        window.location.reload()
      }else{
        navigate('/')
      }
    }


    const clickMenuHam = () => {
        lineOneActive.current?.classList.toggle('activeline1__bars-menu')
        lineTwoActive.current?.classList.toggle('activeline2__bars-menu')
        lineThreeActive.current?.classList.toggle('activeline3__bars-menu')
        navbarOpen.current.classList.toggle('navbar__open')
    }

    const logOut = () => {
      lineOneActive.current?.classList.toggle('activeline1__bars-menu')
      lineTwoActive.current?.classList.toggle('activeline2__bars-menu')
      lineThreeActive.current?.classList.toggle('activeline3__bars-menu')
      navbarOpen.current.classList.toggle('navbar__open')
      localStorage.removeItem('token')
    }


  return (
    <header className="header">
      <div onClick={navigateHome} className="header__title" data-text="e-commerce">e-commerce</div>

      <div className="header__menu" onClick={clickMenuHam}>
        <span ref={lineOneActive} className="menu__line1"></span>
        <span ref={lineTwoActive} className="menu__line2"></span>
        <span ref={lineThreeActive} className="menu__line3"></span>
      </div>

      <nav ref={navbarOpen} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink onClick={clickMenuHam}  to='/login' className={({isActive}) => isActive ? 'navbar__links navbar__links-active' : 'navbar__links'}>
            <i className="fa-regular fa-user"></i>
            <p>Login</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink onClick={clickMenuHam} to='/purchases' className={({isActive}) => isActive ? 'navbar__links navbar__links-active' : 'navbar__links'}>
            <i className="fa-solid fa-store"></i>
            <p>Purchases</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink onClick={clickMenuHam} to='/cart' className={({isActive}) => isActive ? 'navbar__links navbar__links-active' : 'navbar__links'}>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink onClick={logOut} to='/login' className='navbar__links'>
            <i className="fa-solid fa-arrow-right-from-bracket items__logOut"></i>
            <p className="items__logOut">Cerrar sesión.</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
