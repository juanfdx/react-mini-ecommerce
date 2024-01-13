import './Navbar.scss';
import { Link, NavLink } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../features/sidebar/sidebarSlice';
//components
import { Icon } from '../';
//files
import logo from '../../assets/images/logo/logo.svg';


export const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className='navbar'>

      {/* menu button */}
      <button className='navbar__menu-btn'  onClick={()=> dispatch(openSidebar())}>
        <Icon type={'menu'} />
      </button>

      {/* logo */}
      <Link className='navbar__link-logo'>
        <img className='navbar__logo' src={logo} alt="logo image" />
      </Link>

      {/* links */}
      <ul className='navbar__ul'>

        <li className='navbar__li'>
          <NavLink className='navbar__link' to={'/'} >home</NavLink>
        </li>

        <li className='navbar__li'>
          <NavLink className='navbar__link' to={'products'} >products</NavLink>
        </li>

        <li className='navbar__li'>
          <NavLink className='navbar__link' to={'about'} >about</NavLink>
        </li>

        <li className='navbar__li'>
          <NavLink className='navbar__link' to={'contact'} >contact</NavLink>
        </li>

      </ul>

      {/* icons links */}
      <ul className='navbar__icon-ul'>

        <li className='navbar__icon-li'>
          <Link className='navbar__icon-link' to={'/login'}>
            <Icon type={'user'} />
          </Link>
        </li>

        <li className='navbar__icon-li'>
          <Link className='navbar__icon-link' to={'/'}>
            <Icon type={'magnifier'} />
          </Link>
        </li>

        <li className='navbar__icon-li navbar__icon-li--heart'>
          <Link className='navbar__icon-link' to={'wishlist'}>
            <Icon type={'heart'} />
          </Link>
        </li>

        <li className='navbar__icon-li navbar__icon-li--cart'>
          <Link className='navbar__icon-link' to={'cart'}>
            <span className='navbar__item-count'>0</span>
            <Icon type={'cart'} />
          </Link>
        </li>

      </ul>
    </nav>
  )
}