import {expect} from 'chai';
import 'mocha';

import {
  BaseError,
  FoundError,
  MovedError,
  MultipleChoicesError,
  NotModifiedError,
  PermanentRedirectError,
  SeeOtherError,
  TemporaryRedirectError,
  UseProxyError,
} from '../src/index';

import {ErrorCodes} from '../src/error_codes';

let error: BaseError;
let errorCode: number;

describe('FoundError', () => {
  error = new FoundError('FoundError');
  errorCode = ErrorCodes.FoundError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

describe('MovedError', () => {
  error = new MovedError('MovedError');
  errorCode = ErrorCodes.MovedError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

describe('MultipleChoicesError', () => {
  error = new MultipleChoicesError('MultipleChoicesError');
  errorCode = ErrorCodes.MultipleChoicesError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

describe('NotModifiedError', () => {
  error = new NotModifiedError('NotModifiedError');
  errorCode = ErrorCodes.NotModifiedError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

describe('PermanentRedirectError', () => {
  error = new PermanentRedirectError('PermanentRedirectError');
  errorCode = ErrorCodes.PermanentRedirectError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

describe('SeeOtherError', () => {
  error = new SeeOtherError('SeeOtherError');
  errorCode = ErrorCodes.SeeOtherError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

describe('TemporaryRedirectError', () => {
  error = new TemporaryRedirectError('TemporaryRedirectError');
  errorCode = ErrorCodes.TemporaryRedirectError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

describe('UseProxyError', () => {
  error = new UseProxyError('UseProxyError');
  errorCode = ErrorCodes.UseProxyError;
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});
