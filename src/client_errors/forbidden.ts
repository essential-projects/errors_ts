import {BaseError, ErrorCodes} from '../index';

export class ForbiddenError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ForbiddenError, message);
  }

}
