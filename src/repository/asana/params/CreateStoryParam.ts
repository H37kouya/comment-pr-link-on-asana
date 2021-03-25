import { Client } from "asana";

export interface CreateStoryParam {
  client: Client;
  taskGid: string;
  prLink: string
}
