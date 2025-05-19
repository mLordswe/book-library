import "./Footer.scss";
export const Footer = () => {
	const scrollContainer = document.querySelector("body") as HTMLElement;
	return (
		<div className="Footer">
			<button onClick={() => scrollContainer.scrollTo({ top: 0, behavior: "smooth" })}>Back Top</button>
		</div>
	);
};
