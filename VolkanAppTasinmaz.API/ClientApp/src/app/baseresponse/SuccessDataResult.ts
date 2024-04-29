import { DataResult } from "./DataResult";

export class SuccessDataResult<T> extends DataResult<T> {
    constructor(data?: T, message?: string) {
        super(data !== undefined ? data : null, true, message || "");
    }
}
