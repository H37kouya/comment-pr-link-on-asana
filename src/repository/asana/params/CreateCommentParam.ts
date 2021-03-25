import { Client } from "asana";

export interface CreateCommentParam {
  client: Client;
  taskGid: string;
  prLink: string
}
