import BottomPage from "./Pages/footerPage";
import InfoPage from "./Pages/bioInfoPage";
import HeadPage from "./Pages/headPage";
import Page from "./Pages/skillsPage";
import "./App.css";

function App() {
	return (
		<>
			<HeadPage />
			<InfoPage />
			<Page />
			<BottomPage />
		</>
	);
}

export default App;
