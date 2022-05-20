import { useContext } from "react";
import { UserContext } from "./ContextOverseer";

const Creator = () => {
	const user = useContext(UserContext);
	return <div>This page was created by {user}</div>;
};

export default Creator;
