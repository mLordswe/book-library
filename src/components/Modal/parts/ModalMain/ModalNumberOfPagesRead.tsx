import { ChangeEvent } from "react";

type ModalNumberOfPagesRead = {
	maxPage: number;
	pagesRead: number;
	onPagesReadChange: (value: number) => void;
};

export const ModalNumberOfPagesRead = ({ maxPage, pagesRead, onPagesReadChange }: ModalNumberOfPagesRead) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(parseInt(e.target.value, 10) || 0, maxPage);
		onPagesReadChange(value);
	};
	const percentage = Math.round((pagesRead / maxPage) * 100);
	return (
		<div className="page-tracker">
			<label> Pages read: </label>
			<input type="number" value={pagesRead} onChange={handleChange} min={0} max={maxPage} />{" "}
			<p>
				You've read {pagesRead} of {maxPage} {percentage}%
			</p>
		</div>
	);
};
