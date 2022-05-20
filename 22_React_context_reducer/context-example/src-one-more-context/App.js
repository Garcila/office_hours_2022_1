import Heading from "./components/Heading";
import Section from "./components/Section";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import { UserProvider } from "./components/ContextOverseer";

export default function Page() {
	return (
		<UserProvider>
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
		</UserProvider>
	);
}
