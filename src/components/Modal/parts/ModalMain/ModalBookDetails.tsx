import { useEffect, useState } from "react";
import { NormalizedBook } from "../../../../services/types";

type ModalBookDetailsProps = {
	bookkey: string;
};

const ModalBookDetails = ({ bookkey }: ModalBookDetailsProps) => {
	const [data, setData] = useState<NormalizedBook | undefined>(undefined);

	useEffect(() => {
		console.log(bookkey);
		if (!bookkey) return;

		fetch(`/api/works/${bookkey}/editions.json`)
			.then((response) => response.json())
			.then((json) => {
				setData(json.entries?.[0]);
				console.log(json.entries?.[0]);
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
		</div>
	);
};
// todo, url funkar och tar emot data, fixa så att rätt data renderas. namn skribent description bild. fixa sedan att i favoriter renderas samma fast med sidor
export default ModalBookDetails;
