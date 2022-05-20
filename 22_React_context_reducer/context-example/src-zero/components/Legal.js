import { useContext } from "react";
import { UserContext } from "./ContextOverseer";

const Legal = () => {
	const user = useContext(UserContext);
	return <div>cc - {user}</div>;
};

export default Legal;
