import './InstagramShop.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//components
import { Icon, InstagramSlider, LazyLoadImage, SkeletonInstagram, Title } from '../';
//data
import { instagramImages } from '../../data/data-instagram';


export const InstagramShop = () => {

  const [isPageLoading, setIsPageLoading] = useState(true);
  const [position, setPosition] = useState(0);

  // is loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])


  return (
    <section className='instagram'>
      <div className='instagram__container'>

        <div className='instagram__text-box'>
          <Title>
          Instagram Shop
          </Title>
          <p className='instagram__p'>Tag @miniture in your Instagram photos for a chance to be featured here.</p>
          <Link className='instagram__link' to={'https://www.instagram.com/'} target="_blank" rel="noopener noreferrer">
            Visit Our Instagram
          </Link>
        </div>

        <div className='instagram__grid-box'>

            {isPageLoading ? (
              
           <ul className='instagram__skeleton-list'>

              {Array(6).fill(0).map((item,i) => 
                <SkeletonInstagram key={i}/>
              )}

           </ul>
            
            ) : (

            <ul className='instagram__list'>

            {instagramImages.map(item => 
              
              <li key={item.id} className='instagram__card'>
                <Link className='instagram__card-link' onClick={()=> setPosition(item.id)}>
    
                  <div className='instagram__img-wrapper'>
                    <LazyLoadImage src={item.image} alt={item.alt} />
                  </div>

                  <div className='instagram__btn-wrapper'>
                    <button className='instagram__btn'>
                      <Icon type={'instagram'} isInstagramShop={true}/>
                    </button>
                  </div>
    
                </Link>
              </li>
            )}

          </ul>
            )}
      
        </div>

        { position > 0 && (
          <InstagramSlider data={instagramImages} position={position} setPosition={setPosition} />
        )}

      </div>
    </section>
  )
}