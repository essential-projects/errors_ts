import {BaseError} from './base_error';

export function isEssentialProjectsError(error: any): error is BaseError {
  return (error instanceof Error) && (error as BaseError).isEssentialProjectsError === true;
}

// This helps us tell typescript that we want to use a class as a type instead of an instance of a class!
export interface IClassOf<T> {
  new (...args: Array<any>): T;
}

// The following makes the function be a typeguard for whatever Class is in the second argument
export function isError<ErrorType extends BaseError>(error: any, errorClass: IClassOf<ErrorType>): error is ErrorType {
  if (!isEssentialProjectsError(error)) {
    return false;
  }

  return error.constructor.name === errorClass.name;
}
