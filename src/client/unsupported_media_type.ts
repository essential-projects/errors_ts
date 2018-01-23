import {BaseError, ErrorCodes} from '../index';

export class UnsupportedMediaTypeError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.UnsupportedMediaTypeError, message);
  }

}
