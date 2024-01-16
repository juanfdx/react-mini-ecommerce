import './Categories.scss';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
//components
import { Title } from '../';
//data
import { categories } from '../../data/data-categories';
const arrayCats = ['chairs', 'sofas', 'tables', 'beds'];


export const Categories = () => {

  const { categoriesNames  } = useLoaderData();
  /* 
  * we wont use this categoryNames from this api, we just check that works, 
  * we 'll use arrayCats names instead L8
  */
  // console.log({api: '200' , categories: categoriesNames});

  const [updatedCategories, setUpdatedCategories] = useState([]);

  //to fill a prop of an array of objects with a name of  array  of names
  useEffect(() => {
    // Use the map function to associate each object with a name
    const updated = categories.map((item, index) => ({
      ...item,
      category: arrayCats[index] || 'not provided', // Provide a default value if no matching number
    }));

    // Set the updated array to state
    setUpdatedCategories(updated);
  
  }, [])
  

  return (
    <section className='categories'>
      <div className='categories__container'>

        <Title>
          Shop by Categories
        </Title>

        <ul className='categories__ul'>
          
          {updatedCategories.map( (cat, i) => 

            <li key={i} className='categories__li'>
              <Link to={`/products?${cat.category}`} className='categories__link'>
                
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