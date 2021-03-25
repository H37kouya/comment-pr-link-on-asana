import { Client } from "asana";

export interface GetCommentsParam {
  client: Client;
  taskGid: string;
}
