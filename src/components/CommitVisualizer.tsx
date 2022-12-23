import { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import getCommits from "../functions/getCommits";
import { Chart, registerables } from "chart.js";
import { DarkModeContext } from "./DarkModeProvider";
Chart.register(...registerables);

export type userCommitData = {
  userName: string;
  commits: number;
};

export default function CommitVisualizer() {
  const [graphData, setGraphData] = useState<userCommitData[]>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [userFeedback, setUserFeedback] = useState<string>(
    "No commits found for this period"
  );

  useEffect(() => {
    getGraphData();
  }, []);

  async function getGraphData() {
    const response = await getCommits(startDate!, endDate!);

    if (startDate! > endDate!) {
      setUserFeedback("Invalid date-range");
      setGraphData(undefined);
      return;
    }

    if (response.status !== 200) {
      setUserFeedback("No commits found for this period");
      setGraphData(undefined);
      return;
    }

    const commits = await response.json();

    if (commits.length === 0) {
      setUserFeedback("No commits found for this period.");
      setGraphData(undefined);
      return;
    }

    const emails: string[] = commits.map(
      (commit: { committer_email: any }) => commit.committer_email
    );

    const emailAndCommitsAmount: {
      userName: string;
      commits: number;
    }[] = [];

    const uniqueEmails = Array.from(new Set(emails));

    uniqueEmails.forEach((uEmail: string) => {
      let count = 0;
      emails.forEach((email) => {
        if (uEmail === email) {
          count++;
        }
      });
      const userName = uEmail.split("@")[0];
      emailAndCommitsAmount.push({ userName: userName, commits: count });

      setGraphData(emailAndCommitsAmount);
    });
  }

  function handleFilterBtn(e: any) {
    getGraphData();
  }

  function createBarData() {
    const data = {
      labels: graphData && graphData.map((e) => e.userName),
      datasets: [
        {
          label: "User's commits",
          data: graphData && graphData.map((e) => e.commits),
          backgroundColor: "rgb(46, 204, 113)",
        },
      ],
    };
    return data;
  }

  const darkMode = useContext(DarkModeContext);

  return (
    <div className={darkMode.darkMode ? "text-white" : "text-black"}>
      {graphData && startDate && endDate ? (
        <div>
          <h1>
            Showing commits from {startDate} to {endDate}
          </h1>
          <Bar data={createBarData()} />
        </div>
      ) : (
        <h1 className="flex justify-center">{userFeedback}</h1>
      )}
      <div className="flex justify-center pt-4 lg:flex-row sm:flex-col sm:items-center">
        <div className="lg:flex p-2">
          <label className="flex flex-col justify-center" htmlFor="from">
            From:&nbsp;{" "}
          </label>
          <input
            id="from"
            name="from"
            type="date"
            placeholder="yyyy-mm-dd"
            className={
              darkMode.darkMode
                ? "input w-full max-w-xs input-sm bg-gray-800 lg:mr-8"
                : "input w-full max-w-xs input-sm bg-slate-300 lg:mr-8"
            }
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </div>
        <div className="lg:flex p-2">
          <label className="flex flex-col justify-center" htmlFor="to">
            To:&nbsp;{" "}
          </label>
          <input
            id="to"
            name="to"
            type="date"
            placeholder="yyyy-mm-dd"
            className={
              darkMode.darkMode
                ? "input w-full max-w-xs input-sm bg-gray-800"
                : "input w-full max-w-xs input-sm bg-slate-300"
            }
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
        <button className="btn sm:m-3 lg:ml-5" onClick={handleFilterBtn}>
          filter
        </button>
      </div>
    </div>
  );
}
