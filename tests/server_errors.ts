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

describe('BadGatewayError', () => {
  error = new BadGatewayError('BadGatewayError');
  errorCode = ErrorCodes.BadGatewayError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('BandwithLimitExceededError', () => {
  error = new BandwithLimitExceededError('BandwithLimitExceededError');
  errorCode = ErrorCodes.BandwithLimitExceededError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('GatewayTimeoutError', () => {
  error = new GatewayTimeoutError('GatewayTimeoutError');
  errorCode = ErrorCodes.GatewayTimeoutError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('InsufficientStorageError', () => {
  error = new InsufficientStorageError('InsufficientStorageError');
  errorCode = ErrorCodes.InsufficientStorageError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('InternalServerError', () => {
  error = new InternalServerError('InternalServerError');
  errorCode = ErrorCodes.InternalServerError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('LoopDetectedError', () => {
  error = new LoopDetectedError('LoopDetectedError');
  errorCode = ErrorCodes.LoopDetectedError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('NetworkAuthenticationRequiredError', () => {
  error = new NetworkAuthenticationRequiredError('NetworkAuthenticationRequiredError');
  errorCode = ErrorCodes.NetworkAuthenticationRequiredError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('NotImplementedError', () => {
  error = new NotImplementedError('NotImplementedError');
  errorCode = ErrorCodes.NotImplementedError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('ServiceUnavaliableError', () => {
  error = new ServiceUnavaliableError('ServiceUnavaliableError');
  errorCode = ErrorCodes.ServiceUnavaliableError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });

describe('VersionNotSupportedError', () => {
  error = new VersionNotSupportedError('VersionNotSupportedError');
  errorCode = ErrorCodes.VersionNotSupportedError;
  it(`should return ${errorCode}`, () => {
      const result: number = error.code;
      expect(result).to.equal(errorCode);
    });
  });
