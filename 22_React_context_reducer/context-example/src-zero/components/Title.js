import { useContext } from "react";
import { UserContext } from "./ContextOverseer";

const Title = () => {
	const user = useContext(UserContext);
	return <div>{user}'s Wonderful World of Wonder</div>;
};

export default Title;
