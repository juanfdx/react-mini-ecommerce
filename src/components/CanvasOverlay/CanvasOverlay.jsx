import './CanvasOverlay.scss';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../features/sidebar/sidebarSlice';


export const CanvasOverlay = () => {

  const isOpened = useSelector((state) => state.sidebarState.isOpened);
  const dispatch = useDispatch();

  return (
    <div 
      className={`canvas ${(isOpened) ? 'canvas--active' : ''}`}
      onClick={()=> dispatch(closeSidebar())}
    > 
    </div>
  )
}