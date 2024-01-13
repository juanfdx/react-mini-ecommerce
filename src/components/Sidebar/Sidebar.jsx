import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
//redux
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../features/sidebar/sidebarSlice';


export const Sidebar = () => {

  const isOpened = useSelector((state) => state.sidebarState.isOpened);
  const dispatch = useDispatch();

  return (
    <ul className={`sidebar ${(isOpened) ? 'sidebar--active' : ''}`}>

      <button className='sidebar__close-button' onClick={()=> dispatch(closeSidebar())} >
        <RxCross1 className='sidebar__close-icon'/>
      </button>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'/'} >home</NavLink>
      </li>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'products'} >products</NavLink>
      </li>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'about'} >about</NavLink>
      </li>

      <li className='sidebar__li'>
        <NavLink className='sidebar__link' to={'contact'} >contact</NavLink>
      </li>

    </ul>
  )
}