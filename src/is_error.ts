import {BaseError} from './base_error';

export function isEssentialProjectsError(error: any): error is BaseError {
  return (error instanceof Error) && (error as BaseError).isEssentialProjectsError === true;
}

export function isError(error: any, errorClass: BaseError): boolean {
  if (!isEssentialProjectsError(error)) {
    return false;
  }

  return error.constructor.name === errorClass.name;
}
