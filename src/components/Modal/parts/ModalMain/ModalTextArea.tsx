import { useState } from "react";

const ModalTextArea = () => {
	const [value, setValue] = useState("");

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
