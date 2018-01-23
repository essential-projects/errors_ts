import {BaseError, ErrorCodes} from '../index';

export class ContinueError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ContinueError, message);
  }

}
