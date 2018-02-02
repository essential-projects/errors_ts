import {
  BaseError,
  ContinueError,
  ErrorCodes,
  ProcessingError,
  SwitchingProtocolsError,
} from '../src/index';

import 'mocha';
import * as should from 'should';

let error: BaseError;

describe('information_errors', () => {
  describe('ContinueError', () => {
    it(`should return ${ErrorCodes.ContinueError}`, () => {
      error = new ContinueError('ContinueError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.ContinueError);
    });
  });

  describe('ProcessingError', () => {
    it(`should return ${ErrorCodes.ProcessingError}`, () => {
      error = new ProcessingError('ProcessingError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.ProcessingError);
    });
  });

  describe('Switching Protocols Error', () => {
    it(`should return ${ErrorCodes.SwitchingProtocolsError}`, () => {
      error = new SwitchingProtocolsError('SwitchingProtocolsError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.SwitchingProtocolsError);
    });
  });
});
