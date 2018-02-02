import {BadGatewayError, isError, isEssentialProjectsError, NotFoundError} from '../src/index';

import 'mocha';
import * as should from 'should';

const badGatewayError: Error = <any> new BadGatewayError('test');

describe('isError()', () => {
  describe('Bad Gateway Error true', () => {
    it('should return true', () => {
      const badGate: boolean = isError(badGatewayError, BadGatewayError);
      const result: boolean = badGate;
      should(result).be.equal(true);
    });
  });

  describe('Bad Gateway Error false', () => {
    it('should return false', () => {
      const badGate: boolean = isError(badGatewayError, NotFoundError);
      const result: boolean = badGate;
      should(result).be.equal(false);
    });
  });
});

describe('isEssentialsProjectsError()', () => {
  describe('IsEssentialProjectsError true', () => {
    it('should return true', () => {
      const badGate: boolean = isEssentialProjectsError(badGatewayError);
      const result: boolean = badGate;
      should(result).be.equal(true);
    });
  });

  describe('IsEssentialProjectsError false', () => {
    it('should return false', () => {
      const falseError: boolean = isEssentialProjectsError('test');
      const result: boolean = falseError;
      should(result).be.equal(false);
    });
  });
});
