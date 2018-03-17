import { Contract } from "./Contract";
export class Project {
  name: string;
  network: number;
  img: string;
  url: string;
  contracts:Array<Contract>;
}
