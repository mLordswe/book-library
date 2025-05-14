import { AuthorResult } from "services/types";
import "./AuthorCard.scss";

const AuthorCard = ({ key, name, birth_date, top_work, work_count }: AuthorResult) => {
	return (
		<div className="author-card">
			<p>{name}</p>
			<p>{birth_date}</p>
			<p>{top_work}</p>
			<p>{work_count}</p>
		</div>
	);
};

export default AuthorCard;
