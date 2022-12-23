import { useContext, useEffect, useState } from "react";
import Issue from "./Issue/Issue";
import getIssues from "../functions/getIssues";
import { DarkModeContext } from "./DarkModeProvider";
export type issueInfo = {
  title: string;
  state: string;
  iid: number | string;
  assignee: {
    avatar_url: string;
    state: string;
    name: string;
  };
};

//Returns all the issues with status
const IssueList = () => {
  const [issues, setIssues] = useState<issueInfo[]>([]);

  const [all, setAll] = useState<Boolean>(true);
  const [opened, setOpened] = useState<Boolean>(false);
  const [closed, setClosed] = useState<Boolean>(false);

  useEffect(() => {
    getIssues().then(async (response) => {
      if (response.status === 200) {
        setIssues((await response.json()) as issueInfo[]);
      }
    });
  }, []);

  const openedIssues = issues.filter((issues) => issues.state === "opened");
  const closedIssues = issues.filter((issues) => issues.state === "closed");

  const darkMode = useContext(DarkModeContext);

  return (
    <div>
      <div
        className={
          darkMode.darkMode
            ? "text-3xl font-bold font-[verdana] text-white"
            : "text-3xl font-bold font-[verdana] text-black"
        }
      >
        <h2 className="p-2 h-[5vh] lg:pt-3 sm:text-center">Issues</h2>
        <div className="h-[5vh] text-lg flex justify-evenly">
          <div className="flex items-center">
            <button onClick={() => document.getElementById("all")!.click()}>
              All&nbsp;
            </button>
            <input
              type="radio"
              name="radio-1"
              className="radio radio-accent"
              id="all"
              onClick={() => {
                setAll(true);
                setOpened(false);
                setClosed(false);
              }}
              defaultChecked
            />
          </div>
          <div className="flex items-center">
            <button onClick={() => document.getElementById("open")!.click()}>
              Open&nbsp;
            </button>
            <input
              type="radio"
              name="radio-1"
              className="radio radio-accent"
              id="open"
              onClick={() => {
                setAll(false);
                setOpened(true);
                setClosed(false);
              }}
            />
          </div>
          <div className="flex items-center">
            <button onClick={() => document.getElementById("closed")!.click()}>
              Closed&nbsp;
            </button>
            <input
              type="radio"
              name="radio-1"
              className="radio radio-accent"
              id="closed"
              onClick={() => {
                setAll(false);
                setOpened(false);
                setClosed(true);
              }}
            />
          </div>
        </div>
        <div
          className={"lg:h-[80vh] lg:overflow-y-scroll overflow-x-hidden"}
          id="style-1"
        >
          {issues.length === 0 ? (
            <h1>Invalid API-key or token</h1>
          ) : (
            <div>
              {opened
                ? openedIssues.map((issue) => {
                    return <Issue issueInfo={issue} key={issue.iid}></Issue>;
                  })
                : closed
                ? closedIssues.map((issue) => {
                    return <Issue issueInfo={issue} key={issue.iid}></Issue>;
                  })
                : issues.map((issue) => {
                    return <Issue issueInfo={issue} key={issue.iid}></Issue>;
                  })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueList;
