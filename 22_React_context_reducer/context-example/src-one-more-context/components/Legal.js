import { useUserContext } from "./ContextOverseer";

const Legal = () => {
	const { user } = useUserContext();
	return <div>cc - {user}</div>;
};

export default Legal;
