import { todo } from "node:test";
import { EntryType } from "perf_hooks";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BookResult, EditionEntry, WorksType } from "services/types";

const ModalBookDetails = () => {
	const [data, setData] = useState<EditionEntry | undefined>(undefined);

	const params = useParams();

	const key = params.key;

	useEffect(() => {
		console.log(key);
		if (!key) return;

		fetch(`/api/works/${key}/editions.json`)
			.then((response) => response.json())
			.then((json) => {
				setData(json.entries?.[0]);
				console.log(json.entries?.[0]);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, [key]);

	return <div className="book-details">antal sidor:{data?.number_of_pages}</div>;
};
// todo, url funkar och tar emot data, fixa så att rätt data renderas. namn skribent description bild. fixa sedan att i favoriter renderas samma fast med sidor
export default ModalBookDetails;
