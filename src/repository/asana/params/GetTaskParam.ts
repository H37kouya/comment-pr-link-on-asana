import { Client } from "asana";

export interface GetTaskParam {
  client: Client;
  taskGid: string;
}
