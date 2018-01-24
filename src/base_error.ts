import * as errorClasses from './index';

export class BaseError extends Error {
  protected _code: number;
  protected _additionalInformation: string;

  constructor(code: number, message: string) {
    super(message);
    this._code = code;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  public static deserialize(serializedError: string): BaseError {
    const errorInfo: any = JSON.parse(serializedError);
    const errorClass: BaseError = new errorClasses[errorInfo.errorClassName](errorInfo.code, errorInfo.message);
    errorClass.stack = errorInfo.callStack;
    errorClass.additionalInformation = errorInfo.additionalInformation;

    return errorClass;
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

  public serialize(): string {
    return JSON.stringify({
      errorClassName: this.constructor.name,
      code: this.code,
      message: this.message,
      callStack: this.stack,
      additionalInformation: this.additionalInformation,
    });
  }
}
