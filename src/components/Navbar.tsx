import { useContext } from "react";
import DarkModeButton from "./DarkModeButton";
import { DarkModeContext } from "./DarkModeProvider";
import GitlabParams from "./GitlabParams";

function Navbar() {
	const darkmode = useContext(DarkModeContext);
	return (
		<div className="lg:h-[5vh] sm:w-full flex flex-wrap">
			<div
				className={
					darkmode.darkMode
						? "lg:w-1/4 lg:text-start sm:w-full lg:text-3xl sm:text-lg sm:font-semibold p-2 pl-4 font-mono text-white"
						: "lg:w-1/4 lg:text-start sm:w-full lg:text-3xl sm:text-lg sm:font-semibold p-2 pl-4 font-mono text-zinc-900"
				}
			>
				GitLab Visualizer
			</div>
			<div className="lg:w-1/2 sm:w-full flex justify-center">
				<GitlabParams></GitlabParams>
			</div>
			<div id="darkmodeBtn" className="lg:w-1/4 sm:w-full">
				<DarkModeButton></DarkModeButton>
			</div>
		</div>
	);
}

export default Navbar;
