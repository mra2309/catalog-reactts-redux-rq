/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {Text, View} from 'react-native';
import {Product} from '../utils/types';
import useProductDetail from '../api/useProductDetail';
import DetailProduct from '../component/DetailProduct';

interface ProductDetailProps {
  route?: any;
  data?: Product;
}

const ProductDetail: FC<ProductDetailProps> = data => {
  const dataDetail = data.route.params.product;
  console.log('==============================================');
  console.log(dataDetail);
  const {
    data: productDetails,
    isSuccess,
    isError,
    isLoading,
  } = useProductDetail(dataDetail.id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>ERROR</Text>;
  }

  return (
    <View>
      {isSuccess ? (
        <DetailProduct data={productDetails} />
      ) : (
        <View>Gagal Memuat Data</View>
      )}
    </View>
  );
};

export default ProductDetail;
