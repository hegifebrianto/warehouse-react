import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { InventoryItemDto } from '../common/types';



function useInventoryItemByProduct(warehouseId: string, productId: string) {
	const fetchItemByProduct = async (warehouseId: string, productId: string) => {
		const access_token = localStorage.getItem("access_token");

		const { data } = await axios.get(`/api/inventory/by-product`, {
			params: { warehouseId, productId },
			headers: {
				Authorization: `Bearer ${access_token}`,
			  }
		});
		return data as InventoryItemDto;
	};

	const { data, error, isLoading } = useQuery(
		['inventory', 'by-product', warehouseId, productId],
		() => fetchItemByProduct(warehouseId, productId),
		{
			enabled: warehouseId != undefined && productId != undefined,
			retry(failureCount: number, error: AxiosError) {
				if (error.response?.status == 404) return false;
				return failureCount < 2;
			},
		},
	);

	return {
		inventoryItem: data,
		isLoading,
		error: error,
	};
}

export default useInventoryItemByProduct;
