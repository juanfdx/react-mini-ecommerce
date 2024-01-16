import axios from "axios"

const urlAllProducts = 'https://dummyjson.com/products';
const urlCategories = 'https://dummyjson.com/products/categories';



export const featuredProducts = (products) => {
  
  return (  
    products
    //order from most to least stars, this case first toSorted(), then filter()
    .toSorted((a, b) => b.rating - a.rating)
    //get the first 8 products
    .slice(0, 8)
  )
}

// axios requests
export const getProducts = () => {
  return axios.get(urlAllProducts);
}

export const getCategories = () => {
  return axios.get(urlCategories);
}