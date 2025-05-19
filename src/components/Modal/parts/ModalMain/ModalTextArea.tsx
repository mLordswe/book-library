type ModalTextAreaProps = {
	bookId: string;
	notes: string;
	onChange: (bookId: string, text: string) => void;
};

const ModalTextArea = ({ bookId, notes, onChange }: ModalTextAreaProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(bookId, e.target.value);
	};

	return (
		<div className="modal-text-area">
			<textarea
				value={notes}
				onChange={handleChange}
				placeholder="Add your notes about the book..."
				rows={4}
			/>
		</div>
	);
};

export default ModalTextArea;
