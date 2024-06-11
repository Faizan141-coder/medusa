'use server';

export default async function getProducts() {
  const response = await fetch('http://localhost:9000/store/products');
  const data = await response.json(); // Get the entire response object

  console.log('Products: ', data.products); // Log the product array

  return data.products; // Return the products array directly
}
