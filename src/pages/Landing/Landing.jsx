import './Landing.scss';

//components
import { Categories, FeaturedProducts, InstagramShop, ShopServices, Slider } from '../../components';
//requests
import { getCategories, getProducts } from '../../utils';


//loader
export const loader = async () => { 
  // const response = await getProducts();
  // const products = response.data.products;
  // return { products };

  try {
    // Make multiple GET requests using Promise.all
    const [response1, response2] = await Promise.all([
      getProducts(), getCategories()
    ]);

    // Access data from responses
    const products = response1.data.products;
    const tempCategories = response2.data;
    // get only the first 4 category names
    const categoriesNames = tempCategories.slice(0, 4);

    return { products, categoriesNames };

  } catch (error) {
    console.log('Error', error.message);
  }
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