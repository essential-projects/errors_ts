import {BaseError, ErrorCodes} from '../index';

export class FailedDependencyError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.FailedDependencyError, message);
  }

}
