import {ErrorCodes,
  ContinueError,
  ProcessingError,
  SwitchingProtocolsError} from '../src/index';

import {expect} from 'chai';
import 'mocha';

describe('ContinueError', () => {
  it('should return ' + ErrorCodes.ContinueError, () => {
    const continueError = new ContinueError('Errororororoor');
    const result: number = continueError.code;
    expect(result).to.equal(ErrorCodes.ContinueError);
  });
});

describe('ProcessingError', () => {
  it('should return ' + ErrorCodes.ProcessingError, () => {
    const processingError = new ProcessingError('Errororororoor');
    const result: number = processingError.code;
    expect(result).to.equal(ErrorCodes.ProcessingError);
  });
});

describe('Switching Protocols Error', () => {
  it('should return ' + ErrorCodes.SwitchingProtocolsError, () => {
    const switchingProtocolsError = new SwitchingProtocolsError('Errororororoor');
    const result: number = switchingProtocolsError.code;
    expect(result).to.equal(ErrorCodes.SwitchingProtocolsError);
  });
});