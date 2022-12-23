import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";

function GitlabParams() {
	let projectId: string | null = window.sessionStorage.getItem("projectId");
	let token: string | null = window.sessionStorage.getItem("token");

	const darkmode = useContext(DarkModeContext);

	function projectIdChange(e: any) {
		window.sessionStorage.setItem("projectId", e.target.value);
	}
	function tokenChange(e: any) {
		window.sessionStorage.setItem("token", e.target.value);
	}
	if (projectId === null) {
		projectId = "17561";
		window.sessionStorage.setItem("projectId", projectId);
	}
	if (token === null) {
		token = "glpat-Cnnyz93BmjCqcuwZojXb";
		window.sessionStorage.setItem("token", token);
	}

	return (
		<form className="w-full">
			<div className="lg:flex lg:w-full lg:items-center">
				<div className="sm:px-3 lg:w-full lg:flex">
					<label
						htmlFor="projectId"
						className={
							darkmode.darkMode
								? "flex flex-col justify-center text-white"
								: "flex flex-col justify-center text-black"
						}
					>
						Project&nbsp;Id:&nbsp;
					</label>
					<input
						type="text"
						placeholder="Type Project Id here"
						className={
							darkmode.darkMode
								? "input lg:h-10 w-full bg-gray-800 lg:mr-3 sm:px-3 text-gray-200"
								: "input lg:h-10 w-full bg-slate-300 lg:mr-3 text-black"
						}
						name="projectId"
						onChange={projectIdChange}
						defaultValue={projectId}
					/>
				</div>
				<div className="sm:px-3 lg:w-full lg:flex">
					<label
						htmlFor="token"
						className={
							darkmode.darkMode
								? "flex flex-col justify-center text-white"
								: "flex flex-col justify-center text-black"
						}
					>
						Token:&nbsp;
					</label>
					<input
						type="text"
						placeholder="Type Token here"
						className={
							darkmode.darkMode
								? "input lg:h-10 w-full bg-gray-800 text-gray-200"
								: "input lg:h-10 w-full bg-slate-300 text-black"
						}
						name="Token"
						onChange={tokenChange}
						defaultValue={token}
					/>
				</div>
				<div className="flex justify-center">
					{" "}
					<button className="btn m-2" type="submit">
						Update
					</button>
				</div>
			</div>
		</form>
	);
}
export default GitlabParams;
