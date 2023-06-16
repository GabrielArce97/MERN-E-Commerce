import axios from 'axios';
import { Product } from './types/Product';

export async function getProducts() {
  try {
    const products = await axios.get<Product[]>(
      'https://fakestoreapi.com/products'
    );
    console.log('products: ', products);
    return products;
  } catch (error) {
    console.log(error);
  }
}
