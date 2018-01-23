import {BaseError, ErrorCodes} from '../index';

export class ImATeapotError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ImATeapotError, message);
  }

}
