import './InstagramSlider.scss';
import { useEffect, useState } from 'react';
//components
import { Icon } from '../';


export const InstagramSlider = ({ data, position, setPosition }) => {

  const [showButtons, setShowButtons] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);

  const prevImage = (e) => {
    e.stopPropagation();
    //event.detail if they click many times in a row, only take into account the first click
    if (e.detail > 1) {return}
    (position > 1) ? setPosition(position - 1) : setPosition(data.length);
  }

  const nextImage = (e) => {
    e.stopPropagation();
    if (e.detail > 1) {return}
    (position < data.length) ? setPosition(position + 1) : setPosition(1);
  }

  useEffect(() => {
    let timerId = 0;

    if (isMouseIn) { setShowButtons(true); }
    if (!isMouseIn) {   
      timerId = setTimeout(() => {
        setShowButtons(false);
      }, 3000);
    }
  
    return () => { clearTimeout(timerId); }
  }, [isMouseIn])
    

  return (
    <div 
      className='instagram-slider' 
      onClick={()=> setPosition(0)}
      onMouseOver={()=> setIsMouseIn(true)}
      onMouseLeave={()=> setIsMouseIn(false)}
    >

      <div className={`instagram-slider__indicator ${(showButtons) ? 'instagram-slider__btn--show' : ''}`}>
        <span>{position} / {data.length}</span>
      </div>

      <button className='instagram-slider__close-btn' onClick={()=> setPosition(0)}>
        <Icon type={'exit'} isInstagramSlider={true} />
      </button>

      <ul className='instagram-slider__slide' >

        {data.map(item => {

          let status = 'next-image';
          if (position === item.id) { status = 'active-image' };
          if (position > item.id)   { status = 'last-image' };
          if (position < item.id || item.id === 1 && position === data.length) { status = 'next-image' };
          if (position === 1 && item.id === data.length) { status = 'last-image' };

          return (
            <li 
              key={item.id} 
              className={`instagram-slider__card instagram-slider__card--${status}`}
            >
              <img 
                className='instagram-slider__img' 
                src={item.image} 
                alt={item.alt}  
                loading='lazy' 
                onClick={(e)=> e.stopPropagation()}
              />
            </li>  
          )
        })}

      </ul>

      <button 
        className={`instagram-slider__btn instagram-slider__btn--prev ${(showButtons) ? 'instagram-slider__btn--show' : ''}`} 
        onClick={prevImage} 
      >
        <Icon type={'prev'} />
      </button>

      <button 
        className={`instagram-slider__btn instagram-slider__btn--next ${(showButtons) ? 'instagram-slider__btn--show' : ''}`} 
        onClick={nextImage} 
      >
        <Icon type={'next'} />
      </button>     

    </div>
  )
}