import {
  BaseError,
  ErrorCodes,
  FoundError,
  MovedError,
  MultipleChoicesError,
  NotModifiedError,
  PermanentRedirectError,
  SeeOtherError,
  TemporaryRedirectError,
  UseProxyError,
} from '../src/index';

import 'mocha';
import * as should from 'should';

let error: BaseError;

describe('redirect_errors', () => {
  describe('FoundError', () => {
    it(`should return ${ErrorCodes.FoundError}`, () => {
      error = new FoundError('FoundError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.FoundError);
    });
  });

  describe('MovedError', () => {
    it(`should return ${ErrorCodes.MovedError}`, () => {
      error = new MovedError('MovedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.MovedError);
    });
  });

  describe('MultipleChoicesError', () => {
    it(`should return ${ErrorCodes.MultipleChoicesError}`, () => {
      error = new MultipleChoicesError('MultipleChoicesError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.MultipleChoicesError);
    });
  });

  describe('NotModifiedError', () => {
    it(`should return ${ErrorCodes.NotModifiedError}`, () => {
      error = new NotModifiedError('NotModifiedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.NotModifiedError);
    });
  });

  describe('PermanentRedirectError', () => {
    it(`should return ${ErrorCodes.PermanentRedirectError}`, () => {
      error = new PermanentRedirectError('PermanentRedirectError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.PermanentRedirectError);
    });
  });

  describe('SeeOtherError', () => {
    it(`should return ${ErrorCodes.SeeOtherError}`, () => {
      error = new SeeOtherError('SeeOtherError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.SeeOtherError);
    });
  });

  describe('TemporaryRedirectError', () => {
    it(`should return ${ErrorCodes.TemporaryRedirectError}`, () => {
      error = new TemporaryRedirectError('TemporaryRedirectError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.TemporaryRedirectError);
    });
  });

  describe('UseProxyError', () => {
    it(`should return ${ErrorCodes.UseProxyError}`, () => {
      error = new UseProxyError('UseProxyError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.UseProxyError);
    });
  });
});
