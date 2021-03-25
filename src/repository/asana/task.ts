import { CreateCommentParam } from "./params/CreateCommentParam";
import { GetTaskParam } from "./params/GetTaskParam";
import { GetCommentsParam } from "./params/GetCommentsParam";

export const getTask = async ({ client, taskGid }: GetTaskParam) => {
  const task = await client.tasks.findById(taskGid);

  return task;
};

export const createComment = async ({ client, taskGid, prLink }: CreateCommentParam) => {
  try {
    await client.tasks.addComment(
      taskGid,
      {
        "text": `GitHub Link: ${prLink}`
      }
    )
  } catch (e) {
    console.error(e)
  }
}

export const getComments = async ({ client, taskGid }: GetCommentsParam) => {
  const comments = await client.stories.findByTask(taskGid)
  return comments
}
