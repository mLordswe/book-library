import { useState, useEffect } from "react";

const ModalTextArea = () => {
	const [notes, setNotes] = useState<string>("");

	return (
		<div className="modal-text-area">
			<label>Notes:</label>
			<textarea
				value={notes}
				onChange={(e) => setNotes(e.target.value)}
				placeholder="Add your notes about the book..."
				rows={4}
			/>
		</div>
	);
};

export default ModalTextArea;
