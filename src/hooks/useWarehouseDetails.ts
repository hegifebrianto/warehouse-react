import axios from 'axios';
import { useQuery } from 'react-query';
import { WarehouseDto } from '../common/types';

function useWarehouseDetails(warehouseId?: string) {
	const access_token = localStorage.getItem("access_token");

	const fetchWarehouse = async (id: string) => {
		const { data } = await axios.get(`/api/warehouses/${id}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		return data as WarehouseDto;
	};

	const { data, error, isLoading } = useQuery(
		['warehouses', warehouseId],
		() => fetchWarehouse(warehouseId!),
		{
			enabled: warehouseId != undefined,
		},
	);

	return {
		warehouse: (data as WarehouseDto) || {},
		isLoading: isLoading,
		error: error,
	};
}

export default useWarehouseDetails;
