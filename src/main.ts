import { getInput, setFailed } from "@actions/core";
import { getOctokit } from "@actions/github";
import { createAsanaClient } from "./repository/asana";
import { createComment, getTask } from "./repository/asana/task";
import { extractionAsanaUrl } from "./utils/regex";
import { AsanaTaskUrl } from "./domain/AsanaTaskUrl";
import { inProgressPullRequest } from "./service/pullRequest";

// most @actions toolkit packages have async methods
async function run() {
  try {
    const token = getInput("repo-token", { required: true });
    const asanaClientToken = getInput("asana-token", { required: true });

    const client = getOctokit(token);

    /** pr 情報の取得 */
    const { pullRequest } = await inProgressPullRequest(client)
    console.info("pullRequest.url val", pullRequest.html_url)

    /**
     * PRの説明からAsanaのURLを取得する
     */
    const asanaTaskUrl = extractionAsanaUrl(pullRequest.body);
    if (!asanaTaskUrl) {
      console.info("asanaのURLが存在しませんでした。");
      return;
    }

    /**
     * PR本文からタスクGidの取得
     */
    const asanaTaskUrlEntity = AsanaTaskUrl.of(asanaTaskUrl);
    const taskGid = asanaTaskUrlEntity.taskGid();
    if (!taskGid) {
      console.info("taskGidが取得できませんでした");
      return;
    }
    console.info(taskGid);

    const asanaClient = createAsanaClient(asanaClientToken);
    const task = await getTask({
      client: asanaClient,
      taskGid
    });
    console.log('task item', task.name, task.tags, task.custom_fields);

    await createComment({
      client: asanaClient,
      taskGid,
      prLink: pullRequest.html_url
    })
    return
  } catch (e) {
    setFailed(e.message);
  }
}

run();
