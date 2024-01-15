import './Landing.scss';
import axios from 'axios';
//components
import { Categories, FeaturedProducts, InstagramShop, ShopServices, Slider } from '../../components';


//loader
export const loader = async () => { 
  const response = await axios.get('https://dummyjson.com/products');
  const products = response.data.products;
  return { products };
}
//as loader is in Landing page component, we can access products from any component 
//nested in Landing page component

export const Landing = () => {
  
  return (
    <>
      <Slider />
      <Categories />
      <FeaturedProducts />
      <ShopServices isBordered={true} />
      <InstagramShop />
    </>
  )
}