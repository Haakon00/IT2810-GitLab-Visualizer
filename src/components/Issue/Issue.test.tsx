import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Issue from "./Issue";
import { issueInfo } from "../IssueList";

beforeAll(() => {});

test("Renders Issue props", () => {
	const issueInfo: issueInfo = {
		title: "tittel",
		state: "closed",
		iid: -1,
		assignee: { avatar_url: "test.com", state: "closed", name: "Alfonzo" },
	};

	render(<Issue issueInfo={issueInfo} />);
	const responsible = screen.getByTestId("responsible");
	expect(responsible.textContent).toBe("Ansvarlig: Alfonzo");
	const status = screen.getByTestId("status");
	expect(status.textContent).toBe("Status: closed");
	const title = screen.getByTestId("title");
	expect(title.textContent).toBe("tittel");
});

test("Snapshot test of Issue card", () => {
	const issueInfo: issueInfo = {
		title: "tittel",
		state: "closed",
		iid: -1,
		assignee: { avatar_url: "test.com", state: "closed", name: "Alfonzo" },
	};
	const tree = renderer.create(<Issue issueInfo={issueInfo} />).toJSON();
	expect(tree).toMatchSnapshot();
});
