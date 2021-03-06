import {BaseError} from '../base_error';
import {ErrorCodes} from '../error_codes';

export class NotFoundError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.NotFoundError, message);
  }

}
