import { CreateStoryParam } from "./params/CreateStoryParam";
import { GetTaskParam } from "./params/GetTaskParam";

export const getTask = async ({ client, taskGid }: GetTaskParam) => {
  const task = await client.tasks.findById(taskGid);

  return task;
};

export const createStory = async ({ client, taskGid, prLink }: CreateStoryParam) => {
  await client.stories.createOnTask(
    taskGid,
    prLink
  )
}
