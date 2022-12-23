import CommitVisualizer from "./components/CommitVisualizer";
import DarkModeProvider from "./components/DarkModeProvider";
import Footer from "./components/Footer";
import IssueList from "./components/IssueList";
import Navbar from "./components/Navbar";

function App() {
	return (
		<DarkModeProvider>
			<Navbar></Navbar>
			<div className="flex flex-wrap">
				<div className="lg:w-3/4 lg:px-32 sm:w-full sm:justify-center sm:py-11 lg:flex lg:flex-col">
					<CommitVisualizer></CommitVisualizer>
				</div>
				<div className="lg:w-1/4 lg:justify-end sm:w-full sm:justify-center flex">
					<IssueList></IssueList>
				</div>
			</div>
			<Footer></Footer>
		</DarkModeProvider>
	);
}

export default App;
