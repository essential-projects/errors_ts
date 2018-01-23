import {BaseError, ErrorCodes} from '../index';

export class SeeOtherError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.SeeOtherError, message);
  }

}
