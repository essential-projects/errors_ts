import {BaseError, ErrorCodes} from '../index';

export class UnauthorizedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.UnauthorizedError, message);
  }

}
