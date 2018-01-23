export class BaseError extends Error {
  private _code: number;

  constructor(code: number, message: string) {
    super(message);
    this._code = code;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  public get code(): number {
    return this._code;
  }

  public get isEssentialProjectsError(): boolean {
    return true;
  }
}
