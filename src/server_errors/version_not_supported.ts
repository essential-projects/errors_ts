import {BaseError, ErrorCodes} from '../index';

export class VersionNotSupportedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.VersionNotSupportedError, message);
  }

}
