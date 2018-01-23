import {BaseError, ErrorCodes} from '../index';

export class URLTooLongError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.URLTooLongError, message);
  }

}
