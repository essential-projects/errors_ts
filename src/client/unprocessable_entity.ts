import {BaseError, ErrorCodes} from '../index';

export class UnprocessableEntityError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.UnprocessableEntityError, message);
  }

}
