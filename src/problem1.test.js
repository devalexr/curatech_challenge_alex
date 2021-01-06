
const { it } = require('@jest/globals');
const Problem1 = require('./problem1');

const colorsArray = [1, 2, 1, 2, 1, 3, 2];
const numberOfMilkBoxes = 7;

describe('PROBLEM 1 TESTS', () => {


  it('Validate size of colors array', () => {
    expect(Problem1.validateMilkBoxesLimit(colorsArray)).toBe(true);
  });


  it('Validate size of colors array if equals to numberOfMilkBoxes', () => {
    expect(Problem1.validateBoxesAndColors(numberOfMilkBoxes, colorsArray)).toBe(true);
  });


  it('Group milk boxes by colors', () => {
    expect(Problem1.groupMilkBoxesByColor(numberOfMilkBoxes, colorsArray)).toEqual({ '1': 3, '2': 3, '3': 1 });
  });

  it('Test result', () => {
    expect(Problem1.milkMerchant(numberOfMilkBoxes, colorsArray)).toEqual(2);
  });

});

