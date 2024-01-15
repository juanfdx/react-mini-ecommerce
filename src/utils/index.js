export const featuredProducts = (products) => {
  
  return (  
    products
    //order from most to least stars, this case first toSorted(), then filter()
    .toSorted((a, b) => b.rating - a.rating)
    //get the first 8 products
    .slice(0, 8)
  )
}