import { getOctokit } from "@actions/github";
import { getPr, getPrNumber } from "../repository/github/pr";
import { NotExistPullRequestException } from "./NotExistPullRequestException";

export const inProgressPullRequest = async(
  client: ReturnType<typeof getOctokit>,
) => {
  const prNumber = getPrNumber();
  console.info(`PrNumber=${prNumber}`);
  if (!prNumber || prNumber < 0) {
    throw new NotExistPullRequestException("Could not get pull request number from context, exiting")
  }

  try {
    const { pullRequest } = await getPr(client, prNumber)

    console.info(pullRequest);

    return { pullRequest }
  } catch (e) {
    throw new NotExistPullRequestException(e.message)
  }
}
