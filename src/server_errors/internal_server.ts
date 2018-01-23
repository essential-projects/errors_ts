import {BaseError, ErrorCodes} from '../index';

export class InternalServerError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.InternalServerError, message);
  }

}
