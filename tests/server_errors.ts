import 'mocha';

import {
  BadGatewayError,
  BandwithLimitExceededError,
  BaseError,
  GatewayTimeoutError,
  InsufficientStorageError,
  InternalServerError,
  LoopDetectedError,
  NetworkAuthenticationRequiredError,
  NotImplementedError,
  ServiceUnavaliableError,
  VersionNotSupportedError,
} from '../src/index';

import {ErrorCodes} from '../src/error_codes';

let error: BaseError;

describe('BadGatewayError', () => {
  it(`should return ${ErrorCodes.BadGatewayError}`, () => {
    error = new BadGatewayError('BadGatewayError');
    const result: number = error.code;
    if (result !== ErrorCodes.BadGatewayError) {
      throw new Error(`Expected error Code ${ErrorCodes.BadGatewayError} but was ${result}.`);
    }
  });
});

describe('BandwithLimitExceededError', () => {
  it(`should return ${ErrorCodes.BandwithLimitExceededError}`, () => {
    error = new BandwithLimitExceededError('BandwithLimitExceededError');
    const result: number = error.code;
    if (result !== ErrorCodes.BandwithLimitExceededError) {
      throw new Error(`Expected error Code ${ErrorCodes.BandwithLimitExceededError} but was ${result}.`);
    }
  });
});

describe('GatewayTimeoutError', () => {
  it(`should return ${ErrorCodes.GatewayTimeoutError}`, () => {
    error = new GatewayTimeoutError('GatewayTimeoutError');
    const result: number = error.code;
    if (result !== ErrorCodes.GatewayTimeoutError) {
      throw new Error(`Expected error Code ${ErrorCodes.GatewayTimeoutError} but was ${result}.`);
    }
  });
});

describe('InsufficientStorageError', () => {
  it(`should return ${ErrorCodes.InsufficientStorageError}`, () => {
    error = new InsufficientStorageError('InsufficientStorageError');
    const result: number = error.code;
    if (result !== ErrorCodes.InsufficientStorageError) {
      throw new Error(`Expected error Code ${ErrorCodes.InsufficientStorageError} but was ${result}.`);
    }
  });
});

describe('InternalServerError', () => {
  it(`should return ${ErrorCodes.InternalServerError}`, () => {
      error = new InternalServerError('InternalServerError');
      const result: number = error.code;
      if (result !== ErrorCodes.InternalServerError) {
        throw new Error(`Expected error Code ${ErrorCodes.InternalServerError} but was ${result}.`);
      }
  });
});

describe('LoopDetectedError', () => {
  it(`should return ${ErrorCodes.LoopDetectedError}`, () => {
    error = new LoopDetectedError('LoopDetectedError');
    const result: number = error.code;
    if (result !== ErrorCodes.LoopDetectedError) {
      throw new Error(`Expected error Code ${ErrorCodes.LoopDetectedError} but was ${result}.`);
    }
  });
});

describe('NetworkAuthenticationRequiredError', () => {
  it(`should return ${ErrorCodes.NetworkAuthenticationRequiredError}`, () => {
    error = new NetworkAuthenticationRequiredError('NetworkAuthenticationRequiredError');
    const result: number = error.code;
    if (result !== ErrorCodes.NetworkAuthenticationRequiredError) {
      throw new Error(`Expected error Code ${ErrorCodes.NetworkAuthenticationRequiredError} but was ${result}.`);
    }
  });
});

describe('NotImplementedError', () => {
  it(`should return ${ErrorCodes.NotImplementedError}`, () => {
    error = new NotImplementedError('NotImplementedError');
    const result: number = error.code;
    if (result !== ErrorCodes.NotImplementedError) {
      throw new Error(`Expected error Code ${ErrorCodes.NotImplementedError} but was ${result}.`);
    }
  });
});

describe('ServiceUnavaliableError', () => {
  it(`should return ${ErrorCodes.ServiceUnavaliableError}`, () => {
    error = new ServiceUnavaliableError('ServiceUnavaliableError');
    const result: number = error.code;
    if (result !== ErrorCodes.ServiceUnavaliableError) {
      throw new Error(`Expected error Code ${ErrorCodes.ServiceUnavaliableError} but was ${result}.`);
    }
  });
});

describe('VersionNotSupportedError', () => {
  it(`should return ${ErrorCodes.VersionNotSupportedError}`, () => {
    error = new VersionNotSupportedError('VersionNotSupportedError');
    const result: number = error.code;
    if (result !== ErrorCodes.VersionNotSupportedError) {
      throw new Error(`Expected error Code ${ErrorCodes.VersionNotSupportedError} but was ${result}.`);
    }
  });
});
