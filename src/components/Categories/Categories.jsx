import './Categories.scss';
import { Link } from 'react-router-dom';
//components
import { Title } from '../';
//data
import { categories } from '../../data/data-categories';


export const Categories = () => {

  return (
    <section className='categories'>
      <div className='categories__container'>

        <Title>
          Shop by Categories
        </Title>

        <ul className='categories__ul'>
          
          {categories.map( cat => 

            <li key={cat.id} className='categories__li'>
              <Link to={'/products'} className='categories__link'>
                
                <div className='categories__img-wrapper'>
                  <img className='categories__img' 
                      src={cat.image} 
                      alt={cat.alt} 
                  />
                </div>

                <div className='categories__label'>
                  <h4 className='categories__h4'>{cat.category}</h4>
                </div>

              </Link>
            </li>
          )}

        </ul>

      </div>
    </section>
  )
}