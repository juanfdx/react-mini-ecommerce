import './HomeLayout.scss';
import { Outlet } from 'react-router-dom';
//components
import { Footer, Header, CanvasOverlay, Sidebar } from '../../components/';


export const HomeLayout = () => {
  
  return (
    <div className='homelayout'>
      <CanvasOverlay />
      <Header />
      <Sidebar />

      <div className='homelayout__main'>
        <Outlet />
      </div>

      < Footer />
    </div>
  )
}