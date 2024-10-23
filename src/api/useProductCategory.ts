import {useQuery} from 'react-query';
import {Category} from '../utils/types';

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();
  return data;
};

const useProductCategory = () => useQuery('productCategory', fetchCategories);
export default useProductCategory;
