import {useInfiniteQuery} from 'react-query';
import {Product} from '../utils/types';

const fetchProductList = async ({pageParam = 1}): Promise<Product[]> => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${pageParam * 10}`,
  );
  const data = await response.json();
  console.log('===========================================================');
  console.log(pageParam);
  console.log('===========================================================');
  return data.products;
};

const useProductList = () => {
  return useInfiniteQuery('productList', fetchProductList, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length ? pages.length + 1 : undefined;
    },
  });
};
export default useProductList;
