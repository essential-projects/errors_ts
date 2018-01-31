import {
  ContinueError,
  ErrorCodes,
  ProcessingError,
  SwitchingProtocolsError,
} from '../src/index';

import {expect} from 'chai';
import 'mocha';

describe('ContinueError', () => {
  it(`should return ${ErrorCodes.ContinueError}`, () => {
    const continueError: ContinueError = new ContinueError('ContinueError');
    const result: number = continueError.code;
    expect(result).to.equal(ErrorCodes.ContinueError);
  });
});

describe('ProcessingError', () => {
  it(`should return ${ErrorCodes.ProcessingError}`, () => {
    const processingError: ProcessingError = new ProcessingError('ProcessingError');
    const result: number = processingError.code;
    expect(result).to.equal(ErrorCodes.ProcessingError);
  });
});

describe('Switching Protocols Error', () => {
  it(`should return ${ErrorCodes.SwitchingProtocolsError}`, () => {
    const switchingProtocolsError: SwitchingProtocolsError = new SwitchingProtocolsError('SwitchingProtocolsError');
    const result: number = switchingProtocolsError.code;
    expect(result).to.equal(ErrorCodes.SwitchingProtocolsError);
  });
});
