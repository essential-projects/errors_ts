import {BaseError, ErrorCodes} from '../index';

export class PermanentRedirectError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.PermanentRedirectError, message);
  }

}
