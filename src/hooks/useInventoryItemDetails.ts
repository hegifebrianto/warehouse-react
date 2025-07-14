import axios from 'axios';
import { useQuery } from 'react-query';
import { InventoryItemDto } from '../common/types';


const access_token = localStorage.getItem("access_token");

function useInventoryItemDetails(inventoryItemId?: string) {
	const fetchInventoryItem = async (id: string) => {
		const { data } = await axios.get(`/api/inventory/${id}`,{headers: {
			Authorization: `Bearer ${access_token}`,
		  }});
		return data as InventoryItemDto;
	};

	const { data, error, isLoading } = useQuery(
		['inventory', inventoryItemId],
		() => fetchInventoryItem(inventoryItemId!),
		{
			enabled: inventoryItemId != undefined,
		},
	);

	return {
		inventoryItem: data,
		isLoading,
		error: error,
	};
}

export default useInventoryItemDetails;
