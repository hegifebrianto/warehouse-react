import axios from 'axios';
import { useQuery } from 'react-query';
import { IPageQueryDto, PageDto, WarehouseDto } from '../common/types';


function useWarehousesList(organizationId: string, query: IPageQueryDto<WarehouseDto>) {
	const fetchWarehouses = async (organizationId: string, query: IPageQueryDto) => {
		const access_token = localStorage.getItem("access_token");

		const { data } = await axios.get(`/api/warehouses/list/${organizationId}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			params: query,
		});
		return data as PageDto<WarehouseDto>;
	};

	const { data, error, isLoading } = useQuery<PageDto<WarehouseDto>>(
		['warehouses', 'list', organizationId, query],
		() => fetchWarehouses(organizationId!, query),
		{ enabled: organizationId != undefined, keepPreviousData: true },
	);

	return {
		warehouses: data,
		isLoading,
		error: error,
	};
}

export default useWarehousesList;
