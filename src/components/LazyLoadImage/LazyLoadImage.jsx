import './LazyLoadImage.scss';
import { useState } from 'react';
import noImg from '../../assets/images/placeholder/no-image.webp';


export const LazyLoadImage = ({ src, alt, type = null }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <>
      { !isLoaded &&
        <div className='lazy-bg'></div>
      }
      
      <img 
        className={`lazy-image ${isLoaded ? 'lazy-image--loaded' : ''}`} 
        style={{padding: type === 'product' ? '10px' : ''}}
        src={src || noImg} 
        alt={alt} 
        onLoad={()=>setIsLoaded(true)}  
      />
    </>
  )
}