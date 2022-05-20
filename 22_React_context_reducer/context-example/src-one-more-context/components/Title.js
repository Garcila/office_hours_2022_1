import { useUserContext } from "./ContextOverseer";

const Title = () => {
	const { user } = useUserContext();
	return <div>{user}'s Wonderful World of Wonder</div>;
};

export default Title;
