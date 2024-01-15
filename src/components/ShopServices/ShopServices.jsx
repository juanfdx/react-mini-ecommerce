import './ShopServices.scss';
//components
import { SingleService } from '../';


export const ShopServices = ({ isBordered = false }) => {

  return (
    <section className={`services ${(isBordered) ? 'services--border' : ''}`}>
      <div className={`services__container ${(isBordered) ? 'services__container--border' : ''}`}>

        <SingleService type={'shipping'} title={'Free Shipping'} text={'Free Shipping for orders'} />
        
        <SingleService type={'guarantee'} title={'Money Guarantee'} text={'Within 30 days'} />
       
        <SingleService type={'support'} title={'Online Support'} text={'24 hours a day, 7 days a week'} />
        
        <SingleService type={'payment'} title={'Flexible Payment'} text={'Pay with Multiple Credit Cards'} />
      
      </div>
    </section>
  )
}