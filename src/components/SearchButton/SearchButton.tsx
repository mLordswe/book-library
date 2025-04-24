import React from "react";

type ButtonProps = {
	innerText: string;
	onClick?: () => void;
};

export const SearchButton = ({ innerText, onClick }: ButtonProps) => {
	return <button onClick={onClick}>{innerText}</button>;
};
