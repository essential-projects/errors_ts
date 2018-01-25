import {Logger} from 'loggerhythm';
import * as errorClasses from './index';

const logger: Logger = Logger.createLogger('essential-projects-errors');

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
    let errorInfo: any;

    try {
      errorInfo = JSON.parse(serializedError);
    } catch (error) {
      throw new Error(`Error while deserializing an essential-projects-error: Couldn't parse string: ${error.message}`);
    }

    if (errorInfo.errorClassName === undefined
     || errorInfo.code === undefined
     || errorInfo.callStack === undefined) {
      throw new Error('Error while deserializing an essential-projects-error: Serialized object has the wrong structure.');
    }

    if (errorClasses[errorInfo.errorClassName] === undefined) {
      throw new Error(`Error while deserializing an essential-projects-error: ${errorInfo.errorClassName} is not a known essential-projects-error`);
    }

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

    let essentialProjectsErrorName: string = this.constructor.name;
    if (errorClasses[this.constructor.name] === undefined) {
      // the error we want to serailize is not a known essential-projects-error.
      // It might extend one, and if so, we need to find the essential-projects-
      // error this one is based on.

      // tslint:disable-next-line:no-this-assignment
      let classToCheck: any = this;

      while (classToCheck !== null) {
        const currentClassInPrototypeChainIsSearchedFor: Boolean = classToCheck.constructor !== undefined
                                                                && errorClasses[classToCheck.constructor.name] !== undefined;
        if (currentClassInPrototypeChainIsSearchedFor) {
          // We found the essential-projects-error this one is based on.
          essentialProjectsErrorName = classToCheck.constructor.name;
          break;
        }

        classToCheck = Object.getPrototypeOf(classToCheck);
      }

      if (classToCheck === null) {
        // tslint:disable-next-line:max-line-length
        throw new Error(`'serialize' was called on an error that extends an essential-projects BaseError, but no known essential-projects error was found in its prototype-chain. THIS SHOULD NEVER HAPPEN! Are you using mutliple versions of @essential-projects/errors_ts in your project?`);
      }

      logger.info(`derived error '${this.constructor.name}' will be serialized as '${essentialProjectsErrorName}'`);
    }

    return JSON.stringify({
      errorClassName: essentialProjectsErrorName,
      code: this.code,
      message: this.message,
      callStack: this.stack,
      additionalInformation: this.additionalInformation,
    });
  }
}
