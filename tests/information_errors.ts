import {
  BaseError,
  ContinueError,
  ErrorCodes,
  ProcessingError,
  SwitchingProtocolsError,
} from '../src/index';

import 'mocha';

let error: BaseError;

describe('ContinueError', () => {
  it(`should return ${ErrorCodes.ContinueError}`, () => {
    error = new ContinueError('ContinueError');
    const result: number = error.code;
    if (result !== ErrorCodes.ContinueError) {
      throw new Error(`Expected error Code ${ErrorCodes.ContinueError} but was ${result}.`);
    }
  });
});

describe('ProcessingError', () => {
  it(`should return ${ErrorCodes.ProcessingError}`, () => {
    error = new ProcessingError('ProcessingError');
    const result: number = error.code;
    if (result !== ErrorCodes.ProcessingError) {
      throw new Error(`Expected error Code ${ErrorCodes.ProcessingError} but was ${result}.`);
    }
  });
});

describe('Switching Protocols Error', () => {
  it(`should return ${ErrorCodes.SwitchingProtocolsError}`, () => {
    error = new SwitchingProtocolsError('SwitchingProtocolsError');
    const result: number = error.code;
    if (result !== ErrorCodes.SwitchingProtocolsError) {
      throw new Error(`Expected error Code ${ErrorCodes.SwitchingProtocolsError} but was ${result}.`);
    }
  });
});
