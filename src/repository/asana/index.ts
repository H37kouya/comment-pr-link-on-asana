import { Client } from "asana";

export const createAsanaClient = (accessToken: string) =>
  Client.create({
    "defaultHeaders": {
      "asana-enable": "new_user_task_lists"
    }
  }).useAccessToken(accessToken);
