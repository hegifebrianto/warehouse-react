import axios from 'axios';
import { useQuery } from 'react-query';
import { ProductDto } from '../common/types';

function useProductsDetails(productId?: string) {
	const access_token = localStorage.getItem("access_token");

	const fetchProduct = async (id: string) => {

		const { data } = await axios.get(`/api/products/${id}`,{
			headers: {
			  Authorization: `Bearer ${access_token}`,
			},
		  });
		return data as ProductDto;
	};

	const { data, error, isLoading } = useQuery(
		['products', productId],
		() => fetchProduct(productId!),
		{
			enabled: productId != undefined,
		},
	);

	return {
		product: data,
		isLoading,
		error: error,
	};
}

export default useProductsDetails;
