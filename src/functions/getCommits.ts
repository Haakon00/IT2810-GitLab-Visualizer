//Returns all commits from gitlab repo
export default async function getCommits(
  startDate: string,
  endDate: string
): Promise<any> {
  const projectId = window.sessionStorage.getItem("projectId");
  const token = window.sessionStorage.getItem("token");

  const url: string = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${projectId}/repository/commits?private_token=${token}&since=${startDate}&until=${endDate}&per_page=100`;

  const response = await fetch(url);
  return response;
}
