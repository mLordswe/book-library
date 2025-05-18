import { useState, useEffect } from "react";

const ModalTextArea = () => {
	const [value, setValue] = useState(() => localStorage.getItem("modalTextAreaValue") || "");

	useEffect(() => {
		localStorage.setItem("modalTextAreaValue", value);
	}, [value]);

	return (
		<div>
			<textarea
				name="Comments"
				id="Comments"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></textarea>
		</div>
	);
};

export default ModalTextArea;
