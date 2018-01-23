import {BaseError, ErrorCodes} from '../index';

export class NotModifiedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.NotModifiedError, message);
  }

}
