import {BaseError} from './base_error';

export function isError(error: any): error is BaseError {
  return (error instanceof Error) && (error as BaseError).isEssentialProjectsError === true;
}
