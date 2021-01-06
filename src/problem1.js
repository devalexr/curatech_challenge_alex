
const MILK_BOXES_LIMIT = 100;

const output = milkMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]);

console.log('OUTPUT: ', output);

function milkMerchant(numberOfMilkBoxes, colorsArray) {
  let result = 0;

  if (validateBoxesAndColors(numberOfMilkBoxes, colorsArray) && validateMilkBoxesLimit(colorsArray)) {

    const milkBoxesColorGroups = groupMilkBoxesByColor(numberOfMilkBoxes, colorsArray);

    console.log('Milk boxes color groups: ', milkBoxesColorGroups);

    Object.keys(milkBoxesColorGroups).map(function (colorKey) {

      if (milkBoxesColorGroups[colorKey] > 1) {

        let numberOfPairs = 0;

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
    console.log('Input error');
  }

  return result;
}

//==================== VALIDATIONS ====================

function validateBoxesAndColors(numberOfMilkBoxes, colorsArray) {
  return numberOfMilkBoxes == colorsArray.length;
}

function validateMilkBoxesLimit(colorsArray) {
  return colorsArray.length <= MILK_BOXES_LIMIT;
}

//======================= GROUP ============================

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
