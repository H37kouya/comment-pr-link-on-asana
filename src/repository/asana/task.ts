import { CreateStoryParam } from "./params/CreateStoryParam";
import { GetTaskParam } from "./params/GetTaskParam";

export const getTask = async ({ client, taskGid }: GetTaskParam) => {
  const task = await client.tasks.findById(taskGid);

  return task;
};

export const createStory = async ({ client, taskGid, prLink }: CreateStoryParam) => {
  try {
    await client.stories.createOnTask(
      taskGid,
      {
        "html_text": prLink,
        "is_pinned": false,
        "sticker_name": "PR Link",
        "text": prLink
      }
    )
  } catch (e) {
    console.error(e)
  }
}
