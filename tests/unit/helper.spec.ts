import { expect } from 'chai';
import { doSomething } from '@/helper';
import { doSomething2 } from '@/helper2';

describe('helper', function() {
  it('does something', function() {
    expect(doSomething()).to.eql(1);
  });
});

describe('helper2', function() {
  it('does something', function() {
    expect(doSomething2()).to.eql(2);
  });
});
