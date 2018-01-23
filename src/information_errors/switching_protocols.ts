import {BaseError, ErrorCodes} from '../index';

export class SwitchingProtocolsError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.SwitchingProtocolsError, message);
  }

}
