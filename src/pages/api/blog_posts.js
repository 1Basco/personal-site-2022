const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  // "GET /repos/{owner}/{repo}/issues/1"
  const issues = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    creator: process.env.GITHUB_OWNER,
    labels: ["on", "blog", "post"],
  });

  const issuesNumbers = issues.data.map((issue) => issue.number);

  // loop through all the issues and get the body
  const blogData = await Promise.all(
    issuesNumbers.map(async (issueNumber) => {
      const issue = await octokit.request(
        "GET /repos/{owner}/{repo}/issues/{number}",
        {
          owner: "1basco",
          repo: "blog_posts",
          number: issueNumber,
        }
      );
      return {
        id: issue.data.id,
        title: issue.data.title,
        body: issue.data.body,
        tags: issue.data.labels.map((label) => [
          {
            name: label.name,
            color: `# + ${label.color}`,
          },
        ]),
      };
    })
  );

  res.status(200).json({
    data: blogData,
  });
  // res.status(200).json({
  //   issues: issuesNumbers,
  // });
};
