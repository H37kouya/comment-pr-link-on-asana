import { CreateCommentParam } from "./params/CreateCommentParam";
import { GetTaskParam } from "./params/GetTaskParam";

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
