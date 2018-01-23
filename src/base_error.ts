export class BaseError extends Error {
  private _code: number;
  private _additionalInformation: string;

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

  public get additionalInformation(): string {
    return this._additionalInformation;
  }

  public set additionalInformation(additionalInformation: string) {
    this._additionalInformation = additionalInformation;
  }
}
