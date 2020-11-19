import { AxiosPromise } from "axios";

export interface BaseAction {
  types?: string[];
  promise?: () => AxiosPromise;
  type?: string;
  result?: any;
}