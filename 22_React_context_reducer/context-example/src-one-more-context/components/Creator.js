import { useUserContext } from "./ContextOverseer";

const Creator = () => {
	const { user } = useUserContext();
	return <div>This page was created by {user}</div>;
};

export default Creator;
