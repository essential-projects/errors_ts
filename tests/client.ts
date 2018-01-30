import { expect } from 'chai';
import 'mocha';

import { BaseError,
        PreconditionFailedError,
        PreconditionRequiredError,
        ProxyAuthenticationRequiredError,
        RequestedRangeNotSatisfiableError,
        RequestHeaderTooLargeError,
        RequestTimeoutError,
        RequestTooLargeError,
        TooManyRequestsError } from '../src/index';

import { ErrorCodes } from '../src/error_codes';

let error: BaseError;
let errorCode: number;

error = new PreconditionFailedError('PreconditionFailedError');
errorCode = ErrorCodes.PreconditionFailedError;
describe('PreconditionFailedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new PreconditionRequiredError('PreconditionRequiredError');
errorCode = ErrorCodes.PreconditionRequiredError;
describe('PreconditionRequiredError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new ProxyAuthenticationRequiredError('ProxyAuthenticationRequiredError');
errorCode = ErrorCodes.ProxyAuthenticationRequiredError;
describe('ProxyAuthenticationRequiredError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestHeaderTooLargeError('RequestHeaderTooLargeError');
errorCode = ErrorCodes.RequestHeaderTooLargeError;
describe('RequestHeaderTooLargeError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestTimeoutError('RequestTimeoutError');
errorCode = ErrorCodes.RequestTimeoutError;
describe('RequestTimeoutError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestTooLargeError('RequestTooLargeError');
errorCode = ErrorCodes.RequestTooLargeError;
describe('RequestTooLargeError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestedRangeNotSatisfiableError('RequestedRangeNotSatisfiableError');
errorCode = ErrorCodes.RequestedRangeNotSatisfiableError;
describe('RequestedRangeNotSatisfiableError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new TooManyRequestsError('TooManyRequestsError');
errorCode = ErrorCodes.TooManyRequestsError;
describe('TooManyRequestsError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});
