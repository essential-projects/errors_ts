import {BaseError, ErrorCodes} from '../index';

export class NotImplementedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.NotImplementedError, message);
  }

}
