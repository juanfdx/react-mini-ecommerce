import './FeaturedProducts.scss';
import { Link, useLoaderData } from 'react-router-dom';
//components
import { Icon, Title } from '../';
//utils
import { featuredProducts } from '../../utils';


export const FeaturedProducts = () => {

  const { products } = useLoaderData();

  console.log(featuredProducts(products));
  return (
    <section className='featured'>
      <div className='featured__container'>

        <Title>
          Featured Products
        </Title>

        <ul className='featured__products'>

          {featuredProducts(products).map(product => 
            <li key={product.id} className='featured__card'>
              <Link className='featured__card-link' to={`product/${product.id}`}>
              
                <div className='featured__img-wrapper'>
                  <img className='featured__img' src={product.thumbnail} alt="" />
                  <div className='featured__layer-canvas'></div>
                </div>

                <div className='featured__btn-wrapper'>
                  <button className='featured__btn'>
                    <Icon type={'addItem'}/>
                  </button>
                </div>

              </Link>

              <div className='featured__text-wrapper'>
                <Link className='featured__card-h3-link' to={`product/${product.id}`}> {product.title}</Link>
                <p className='featured__card-p'>${product.price}</p>
              </div>
            </li>
          )}

        </ul>

      </div>
    </section>
  )
}