import Heading from "./components/Heading";
import Section from "./components/Section";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import { useContext } from "react";
import { UserContext } from "./components/ContextOverseer";

export default function Page() {
	const user = useContext(UserContext);
	return (
		<UserContext.Provider value={user}>
			<Section>
				<Heading />
			</Section>
			<Section>
				<Main />
				<Aside />
			</Section>
			<Section>
				<Footer />
			</Section>
		</UserContext.Provider>
	);
}
