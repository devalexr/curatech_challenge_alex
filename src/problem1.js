
const MILK_BOXES_LIMIT = 100;

const output = milkMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]);

console.log('OUTPUT: ', output);

/**
 * return an integer representing the number of matching milkboxes that are available. 
 *
 * @param {int} numberOfMilkBoxes - the number of milkboxes in the store
 * @param {Array} colorsArray colors of milkboxes
 * 
 * @return {number} the colors of milkboxes
 *
 */

function milkMerchant(numberOfMilkBoxes, colorsArray) {
  let result = 0;

  //validate input
  if (validateBoxesAndColors(numberOfMilkBoxes, colorsArray) && validateMilkBoxesLimit(colorsArray)) {

    //group milkboxes by "color"
    const milkBoxesColorGroups = groupMilkBoxesByColor(numberOfMilkBoxes, colorsArray);

    console.log('Milk boxes color groups: ', milkBoxesColorGroups);

    //parse milkboxes and check how many pairs have in the array
    Object.keys(milkBoxesColorGroups).map(function (colorKey) {

      if (milkBoxesColorGroups[colorKey] > 1) {

        let numberOfPairs = 0;
        
        //is a pair number
        if (milkBoxesColorGroups[colorKey] % 2 == 0) {
          numberOfPairs += (milkBoxesColorGroups[colorKey] / 2);
        }
        else {
          numberOfPairs += (milkBoxesColorGroups[colorKey] / 2) - 0.5;
        }

        console.log('Number of pairs - ', colorKey, ' -> ', numberOfPairs);

        result += numberOfPairs;
      }

    });

  }
  else {
    console.error('Input error (Run test cases)');
  }

  return result;
}

/**
 * validate if numberOfMilkBoxes is equals to colorsArray.leght
 *
 * @param {int} numberOfMilkBoxes - the number of milkboxes in the store
 * @param {Array} colorsArray colors of milkboxes
 * 
 * @return {boolean} if is a valid input
 *
 */

function validateBoxesAndColors(numberOfMilkBoxes, colorsArray) {
  return numberOfMilkBoxes == colorsArray.length;
}

/**
 * validate if colorsArray is smaller than MILK_BOXES_LIMIT
 *
 * @param {Array} colorsArray colors of milkboxes
 * 
 * @return {boolean} if is a valid input
 *
 */

function validateMilkBoxesLimit(colorsArray) {
  return colorsArray.length <= MILK_BOXES_LIMIT;
}


/**
 * Count how many times the milkboxes are repeated 
 *
 * @param {int} numberOfMilkBoxes - the number of milkboxes in the store
 * @param {Array} colorsArray colors of milkboxes
 * 
 * 
 * @return {Object} groupeds elements
 * 
 * @example
 *
 *    groupMilkBoxesByColor(7, [1, 2, 1, 2, 1, 3, 2])
 *    output: { '1': 3, '2': 3, '3': 1 }
 *     
 */

function groupMilkBoxesByColor(numberOfMilkBoxes, colorsArray) {
  let milkBoxesColorGroups = {};

  for (i = 0; i < numberOfMilkBoxes; i++) {
    if (!milkBoxesColorGroups[colorsArray[i]]) {
      milkBoxesColorGroups[colorsArray[i]] = 1;
    }
    else {
      milkBoxesColorGroups[colorsArray[i]] = milkBoxesColorGroups[colorsArray[i]] + 1;
    }
  }

  return milkBoxesColorGroups;
}

module.exports = {
  milkMerchant,
  validateBoxesAndColors,
  validateMilkBoxesLimit,
  groupMilkBoxesByColor,
}
