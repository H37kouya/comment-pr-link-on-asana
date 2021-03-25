import { getOctokit, context as GitHubContext } from "@actions/github";

export const getPrNumber = (): number | undefined => {
  const pullRequest = GitHubContext.payload.pull_request;

  if (!pullRequest) {
    return undefined;
  }

  return pullRequest.number;
};

export const getPr = async (
  client: ReturnType<typeof getOctokit>,
  prNumber: number
) => {
  const { data } = await client.pulls.get({
    owner: GitHubContext.repo.owner,
    repo: GitHubContext.repo.repo,
    pull_number: prNumber
  });

  return {
    pullRequest: data
  }
}
