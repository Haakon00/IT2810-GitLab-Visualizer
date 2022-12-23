export default async function getIssues(): Promise<any> {
  const projectId = window.sessionStorage.getItem("projectId");
  const token = window.sessionStorage.getItem("token");

  const url: string = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${projectId}/issues?private_token=${token}`;
  const response = await fetch(url);
  return response;
}
