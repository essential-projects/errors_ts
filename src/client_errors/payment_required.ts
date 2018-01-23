import {BaseError, ErrorCodes} from '../index';

export class PaymentRequiredError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.PaymentRequiredError, message);
  }

}
