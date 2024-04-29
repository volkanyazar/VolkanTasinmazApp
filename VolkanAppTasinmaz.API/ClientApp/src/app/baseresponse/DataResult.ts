import { IDataResult } from "./IDataResult";
import { Result } from "./Result";

export class DataResult<T> extends Result implements IDataResult<T> {
    public data: T;

    constructor(data: T, success: boolean, message: string = "") {
        super(success, message);
        this.data = data;
    }
}
