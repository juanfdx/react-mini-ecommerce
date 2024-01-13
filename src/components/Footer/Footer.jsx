import './Footer.scss';
import { Link } from 'react-router-dom';
//components
import { Icon } from '../';
//files
import paymentImg from '../../assets/images/icons/payment_icon.svg';


export const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <div className='footer'>

      <div className='footer__row1'>
        
        {/* row 1 */}
        <div className='footer__wrapper footer__wrapper--row1'>
          <div className='footer__text-wrapper'>
            <h3 className='footer__h3'>Our Store</h3>
            <p className='footer__p'>Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups.</p>
            
            <div className='footer__links-wrapper'>
              <Link className='footer__link' to={'https://www.facebook.com/'} target="_blank" rel="noopener noreferrer">
                <Icon type={'facebook'} />
              </Link>
              <Link className='footer__link' to={'https://twitter.com/'} target="_blank" rel="noopener noreferrer">
                <Icon type={'twitter'} />
              </Link>
              <Link className='footer__link' to={'https://www.instagram.com/'} target="_blank" rel="noopener noreferrer">
                <Icon type={'instagram'} />
              </Link>
              <Link className='footer__link' to={'https://www.pinterest.es/'} target="_blank" rel="noopener noreferrer">
                <Icon type={'pinterest'} />
              </Link>
            </div>
          </div>
  
          <div className='footer__text-wrapper'>
            <h3 className='footer__h3'>Quick links</h3>
            <ul className='footer__ul'>
              <li className='footer__li'><Link className='footer__quick-link'>My account</Link></li>
              <li className='footer__li'><Link className='footer__quick-link'>Shopping Cart</Link></li>
              <li className='footer__li'><Link className='footer__quick-link'>Wishlist</Link></li>
              <li className='footer__li'><Link className='footer__quick-link'>Product Compare</Link></li>
            </ul>
          </div>
  
          <div className='footer__text-wrapper'>
            <h3 className='footer__h3'>Information</h3> 
            <ul className='footer__list'>
              <li className='footer__li'><Link className='footer__quick-link'>Privacy policy</Link></li>
              <li className='footer__li'><Link className='footer__quick-link'>Refund policy</Link></li>
              <li className='footer__li'><Link className='footer__quick-link'>Shipping & Return</Link></li>
              <li className='footer__li'><Link className='footer__quick-link'>Term & Conditions</Link></li>
            </ul>
          </div>
  
          <div className='footer__text-wrapper'>
            <h2 className='footer__h2'>Let's get in touch</h2>
            <p className='footer__p'>Sign up for our newsletter and receive 10% off your</p>
           
            <form className='footer__form'>
              <div className='footer__form-group'>

                <div className='footer__input-group'>
                  <input 
                    id='email'
                    className='footer__input' 
                    type="text" 
                    name='email' 
                    placeholder='Enter your email address...'
                    autoComplete='off' 
                  />
                </div>

                <button type='button' className='footer__btn-submit'>
                  <Icon type={'sendArrowRight'} />
                </button>

              </div>
            </form>        
          </div>
        </div>

      </div>

      {/* row 2 */}
      <div className='footer__row2'>
        <div className='footer__wrapper footer__wrapper--row2'>
          <p className='footer__p footer__p--row2'>&copy; {year} Miniture All rights reserved. Designed by Novaworks</p>

          <div className='footer__img-wrapper'>
            <img className='footer__img' src={paymentImg} alt="payment icons image" />
          </div>
        </div>
      </div>

    </div>
  )
}