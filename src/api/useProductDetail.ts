import {useQuery} from 'react-query';
import {Product} from '../utils/types';

const fetchProductDetail = async (idProduct: number): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${idProduct}`);
  const data = await response.json();
  return data;
};

const useProductDetail = (idProduct: number) =>
  useQuery(['posts', idProduct], () => fetchProductDetail(idProduct));
export default useProductDetail;
