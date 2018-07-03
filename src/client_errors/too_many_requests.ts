import {BaseError} from './../base_error';
import {ErrorCodes} from './../error_codes';

export class TooManyRequestsError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.TooManyRequestsError, message);
  }

}
