import axios from 'axios';
import { useQuery } from 'react-query';
import { OrganizationDto } from '../common/types';

function useOrganizationDetails(organizationId?: string) {
	const access_token = localStorage.getItem("access_token");
	console.log(access_token, "access_token from details");

	console.log('apakah masuk sini ?');

	const fetchOrganization = async (id: string) => {
		const { data } = await axios.get(`/api/organizations/${id}`, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		console.log(data,'data');
		return data as OrganizationDto;
	};

	const { data, error, isLoading } = useQuery<any>(
		['organizations', organizationId],
		() => fetchOrganization(organizationId!),
		{
			enabled: organizationId != undefined,
			refetchInterval: 60 * 1000,
		},
	);

	return {
		organization: data as OrganizationDto,
		isLoading,
		error: error,
	};
}

export default useOrganizationDetails;
