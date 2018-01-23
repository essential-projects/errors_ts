import {BaseError, ErrorCodes} from '../index';

export class UpgradeRequiredError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.UpgradeRequiredError, message);
  }

}
