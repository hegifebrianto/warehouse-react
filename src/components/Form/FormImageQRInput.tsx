import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Control, Controller } from 'react-hook-form';
import classNames from 'classnames';
import { REGULAR_INPUT_CLASSNAMES } from './regularInputClassnames';

export interface FormImageQRInputProps {
	name: string;
	control: Control<any, any>;
	valueToEncode: string; // Misalnya: URL produk
}

function FormImageQRInput({ name, control, valueToEncode }: FormImageQRInputProps) {
	const [qrDataUrl, setQrDataUrl] = useState<string>('');

	// Generate QR base64 saat valueToEncode berubah
	useEffect(() => {
		if (!valueToEncode) return;
		QRCode.toDataURL(valueToEncode)
			.then(setQrDataUrl)
			.catch((err) => console.error('QR generate failed:', err));
	}, [valueToEncode]);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange } }) => {
				// Push ke form saat base64 QR siap
				// eslint-disable-next-line react-hooks/rules-of-hooks
				useEffect(() => {
					if (qrDataUrl) {
						onChange({
							hasImage: true,
							data: qrDataUrl,
						});
					}
				}, [qrDataUrl]);

				return (
					<div className={classNames(REGULAR_INPUT_CLASSNAMES, 'flex items-center justify-center')}>
						{qrDataUrl ? (
							<img
								src={qrDataUrl}
								alt="QR Code"
								className="h-32 w-32 rounded border object-contain"
							/>
						) : (
							<span className="text-sm text-gray-500">Generating QR Code...</span>
						)}
					</div>
				);
			}}
		/>
	);
}

export default FormImageQRInput;
