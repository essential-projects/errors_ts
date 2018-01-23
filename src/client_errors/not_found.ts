import {BaseError, ErrorCodes} from '../index';

export class NotFoundError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.NotFoundError, message);
  }

}
