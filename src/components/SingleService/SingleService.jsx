import './SingleService.scss';
//componentes
import { Icon } from '../';


export const SingleService = ({ type, title, text }) => {

  return (
    <div className='service'>
      <div className='service__icon-box'>
        <Icon type={type}/>
      </div>

      <div className='service__text-box'>
        <h3 className='service__h3'>{title}</h3>
        <p className='service__p'>{text}</p>
      </div>      
    </div>
  )
}