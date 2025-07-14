import axios from 'axios';
import { useQuery } from 'react-query';
import { IPageQueryDto, PageDto, ProductDto } from '../common/types';

function useProductsList(organizationId: string, query: IPageQueryDto) {
	const access_token = localStorage.getItem("access_token");

	const fetchProducts = async (id: string) => {
		const { data } = await axios.get(`/api/products/list/${id}`, { params: query,headers: {
			Authorization: `Bearer ${access_token}`,
		  }, });
		return data as PageDto<ProductDto>;
	};

	const { data, error, isLoading } = useQuery(
		['products', 'list', organizationId, query],
		() => fetchProducts(organizationId),
		{
			enabled: organizationId != undefined,
			keepPreviousData: true,
		},
	);

	return {
		products: data,
		isLoading,
		error: error,
	};
}

export default useProductsList;
