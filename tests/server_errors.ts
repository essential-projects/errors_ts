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

describe('BadGatewayError', () => {
  it(`should return ${ErrorCodes.BadGatewayError}`, () => {
    error = new BadGatewayError('BadGatewayError');
    const result: number = error.code;
    expect(result).to.equal(ErrorCodes.BadGatewayError);
    });
  });

describe('BandwithLimitExceededError', () => {
  it(`should return ${ErrorCodes.BandwithLimitExceededError}`, () => {
    error = new BandwithLimitExceededError('BandwithLimitExceededError');
    const result: number = error.code;
    expect(result).to.equal(ErrorCodes.BandwithLimitExceededError);
    });
  });

describe('GatewayTimeoutError', () => {
  it(`should return ${ErrorCodes.GatewayTimeoutError}`, () => {
    error = new GatewayTimeoutError('GatewayTimeoutError');
    const result: number = error.code;
    expect(result).to.equal(ErrorCodes.GatewayTimeoutError);
    });
  });

describe('InsufficientStorageError', () => {
  it(`should return ${ErrorCodes.InsufficientStorageError}`, () => {
    error = new InsufficientStorageError('InsufficientStorageError');
    const result: number = error.code;
    expect(result).to.equal(ErrorCodes.InsufficientStorageError);
    });
  });

describe('InternalServerError', () => {
  it(`should return ${ErrorCodes.InternalServerError}`, () => {
      error = new InternalServerError('InternalServerError');
      const result: number = error.code;
      expect(result).to.equal(ErrorCodes.InternalServerError);
    });
  });

describe('LoopDetectedError', () => {
  it(`should return ${ErrorCodes.LoopDetectedError}`, () => {
    error = new LoopDetectedError('LoopDetectedError');
    const result: number = error.code;
    expect(result).to.equal(ErrorCodes.LoopDetectedError);
    });
  });

describe('NetworkAuthenticationRequiredError', () => {
  it(`should return ${ErrorCodes.NetworkAuthenticationRequiredError}`, () => {
    error = new NetworkAuthenticationRequiredError('NetworkAuthenticationRequiredError');
    const result: number = error.code;
    expect(result).to.equal(ErrorCodes.NetworkAuthenticationRequiredError);
    });
  });

describe('NotImplementedError', () => {
  it(`should return ${ErrorCodes.NotImplementedError}`, () => {
      error = new NotImplementedError('NotImplementedError');
      const result: number = error.code;
      expect(result).to.equal(ErrorCodes.NotImplementedError);
    });
  });

describe('ServiceUnavaliableError', () => {
  it(`should return ${ErrorCodes.ServiceUnavaliableError}`, () => {
      error = new ServiceUnavaliableError('ServiceUnavaliableError');
      const result: number = error.code;
      expect(result).to.equal(ErrorCodes.ServiceUnavaliableError);
    });
  });

describe('VersionNotSupportedError', () => {
  it(`should return ${ErrorCodes.VersionNotSupportedError}`, () => {
      error = new VersionNotSupportedError('VersionNotSupportedError');
      const result: number = error.code;
      expect(result).to.equal(ErrorCodes.VersionNotSupportedError);
    });
  });
