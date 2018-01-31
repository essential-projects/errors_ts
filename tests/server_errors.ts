import {expect} from 'chai';
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
let errorCode: number;

error = new BadGatewayError('BadGatewayError');
errorCode = ErrorCodes.BadGatewayError;
describe('BadGatewayError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new BandwithLimitExceededError('BandwithLimitExceededError');
errorCode = ErrorCodes.BandwithLimitExceededError;
describe('BandwithLimitExceededError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new GatewayTimeoutError('GatewayTimeoutError');
errorCode = ErrorCodes.GatewayTimeoutError;
describe('GatewayTimeoutError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new InsufficientStorageError('InsufficientStorageError');
errorCode = ErrorCodes.InsufficientStorageError;
describe('InsufficientStorageError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new InternalServerError('InternalServerError');
errorCode = ErrorCodes.InternalServerError;
describe('InternalServerError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new LoopDetectedError('LoopDetectedError');
errorCode = ErrorCodes.LoopDetectedError;
describe('LoopDetectedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new NetworkAuthenticationRequiredError('NetworkAuthenticationRequiredError');
errorCode = ErrorCodes.NetworkAuthenticationRequiredError;
describe('NetworkAuthenticationRequiredError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new NotImplementedError('NotImplementedError');
errorCode = ErrorCodes.NotImplementedError;
describe('NotImplementedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new ServiceUnavaliableError('ServiceUnavaliableError');
errorCode = ErrorCodes.ServiceUnavaliableError;
describe('ServiceUnavaliableError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new VersionNotSupportedError('VersionNotSupportedError');
errorCode = ErrorCodes.VersionNotSupportedError;
describe('VersionNotSupportedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});
