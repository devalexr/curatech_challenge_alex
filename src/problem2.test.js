const { it } = require('@jest/globals');
const Problem2 = require('./problem2');

const steps = 12;
const path = 'DDUUDDUDUUUD';

describe('PROBLEM 2 TESTS', () => {

  it('Validate path format', () => {
    expect(Problem2.validatePathInput(steps, path)).toBe(true);
  });

  it('Validate path ends at ocean level', () => {
    expect(Problem2.validatePathFinishInSeaLevel(path)).toBe(true);
  });

});

