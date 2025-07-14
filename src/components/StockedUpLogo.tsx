import React from 'react';
import LogoTerbit from '../assets/logo-terbit.webp';

type LogoVariant = 'black' | 'white';

interface StockedUpLogoProps
	extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	variant: LogoVariant;
}

function StockedUpLogo(props: StockedUpLogoProps) {
	const variant = props.variant;

	function getSrc(variant: LogoVariant): string {
		if (variant == 'white') {
			return LogoTerbit;
		} else if (variant == 'black') {
			return LogoTerbit;
		}
		return '';
	}

	return (
		<img
			{...props}
			src={getSrc(variant)}
			alt="StockedUp logo"
			width={340}
			height={115}
		/>
	);
}

export default StockedUpLogo;
