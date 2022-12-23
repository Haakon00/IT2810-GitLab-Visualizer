import { useContext } from "react";
import { DarkModeContext } from "../DarkModeProvider";
import { issueInfo } from "../IssueList";

function Issue(props: { issueInfo: issueInfo }) {
	const darkMode = useContext(DarkModeContext);
	return (
		<div
			className={
				darkMode.darkMode
					? "card w-96 bg-slate-800 shadow-xl text-center text-white my-3 text-base"
					: "card w-96 bg-[#FEF08A] shadow-xl text-center text-black my-3 text-base"
			}
		>
			<div data-testid="title" className="mt-1 mx-2">
				{props.issueInfo.title}
			</div>
			<div data-testid="status" className="font-normal">
				Status: {props.issueInfo.state}
			</div>
			{props.issueInfo.assignee && (
				<div data-testid="responsible" className="flex flex-col font-normal items-center">
					Ansvarlig: {props.issueInfo.assignee.name}
					<img
						className="w-1/12 object-cover my-4"
						src={props.issueInfo.assignee.avatar_url}
						alt="assignee avatar"
					/>
				</div>
			)}
		</div>
	);
}

export default Issue;
