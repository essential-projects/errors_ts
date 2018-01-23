import {BaseError, ErrorCodes} from '../index';

export class RequestHeaderTooLargeError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.RequestHeaderTooLargeError, message);
  }

}
