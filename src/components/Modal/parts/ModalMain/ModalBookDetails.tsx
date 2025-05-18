import { useEffect, useState } from "react";
import { NormalizedBook } from "../../../../services/types";

type ModalBookDetailsProps = {
	bookkey: string;
	onEditionLoaded: (bookData: NormalizedBook) => void;
};

const ModalBookDetails = ({ bookkey, onEditionLoaded }: ModalBookDetailsProps) => {
	const [data, setData] = useState<NormalizedBook | undefined>(undefined);

	useEffect(() => {
		console.log("Fetching details for:", bookkey);
		if (!bookkey) return;

		fetch(`/api/works/${bookkey}/editions.json`)
			.then((response) => response.json())
			.then((json) => {
				const editionData = json.entries?.[0];
				setData(editionData);
				console.log("Edition data loaded:", editionData);

				if (editionData) {
					onEditionLoaded(editionData);
				}
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, [bookkey]);

	return (
		<div className="book-details">
			<h3>{data?.title}</h3>
			<p>
				{typeof data?.description === "string"
					? data.description
					: data?.description?.value ?? "Ingen beskrivning tillgänglig"}
			</p>
			{data?.publishers && data.publishers.length > 0 && <p>Publisher: {data.publishers.join(", ")}</p>}
			<p>First sentence: {data?.first_sentence?.value}</p>
		</div>
	);
};

export default ModalBookDetails;
