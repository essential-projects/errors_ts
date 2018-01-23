import {BaseError, ErrorCodes} from '../index';

export class MethodNotAllowedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.MethodNotAllowedError, message);
  }

}
