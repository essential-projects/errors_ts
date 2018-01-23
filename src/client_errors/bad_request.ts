import {BaseError, ErrorCodes} from '../index';

export class BadRequestError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.BadRequestError, message);
  }

}
