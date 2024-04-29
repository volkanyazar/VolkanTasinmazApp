import { IResult } from "./IResult";

export class Result implements IResult {
  success: boolean;
  message: string;

  constructor(success: boolean, message: string = "") {
    this.success = success;
    this.message = message;
  }
}
