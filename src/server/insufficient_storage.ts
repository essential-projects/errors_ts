import {BaseError, ErrorCodes} from '../index';

export class InsufficientStorageError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.InsufficientStorageError, message);
  }

}
