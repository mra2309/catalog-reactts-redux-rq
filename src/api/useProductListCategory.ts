import {useInfiniteQuery} from 'react-query';
import {Product} from '../utils/types';

const fetchProductList = async ({
  pageParam = 1,
  search = '',
}: {
  pageParam?: number;
  search?: string;
}): Promise<Product[]> => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${search}?limit=10&skip=${
      (pageParam - 1) * 10
    }`,
  );
  const data = await response.json();
  console.log('===========================================================');
  console.log(data);
  console.log(pageParam);
  console.log(search);
  console.log('===========================================================');
  return data.products;
};

const useProductListCategory = (search: string) => {
  return useInfiniteQuery(
    ['productCategoryDetail', search],
    ({pageParam = 1}) => fetchProductList({pageParam, search}),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length ? pages.length + 1 : undefined;
      },
    },
  );
};
export default useProductListCategory;
