
const MILK_BOXES_LIMIT = 100;

const output = milkMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

function milkMerchant (numberOfMilkBoxes, colorsArray)
{
  let result = 0;
  
  if(validateBoxesAndColors(numberOfMilkBoxes, colorsArray) && validateMilkBoxesLimit(colorsArray))
  {   
    const milkBoxesColorGroups = groupMilkBoxesByColor(numberOfMilkBoxes, colorsArray);

    console.log(milkBoxesColorGroups);
  }
  else
  {
    console.log('Input error');
  }

  return result;
}

//==================== VALIDATIONS ====================

function validateBoxesAndColors (numberOfMilkBoxes, colorsArray)
{
  return numberOfMilkBoxes == colorsArray.length;
}

function validateMilkBoxesLimit(colorsArray)
{
  return colorsArray.length <= MILK_BOXES_LIMIT;
}

//======================= GROUP ============================

function groupMilkBoxesByColor(numberOfMilkBoxes, colorsArray)
{
  let milkBoxesColorGroups = {};

  for(i = 0; i < numberOfMilkBoxes; i++)
  {
    if(!milkBoxesColorGroups[colorsArray[i]])
    {
      milkBoxesColorGroups[colorsArray[i]] = 1;
    }
    else
    {
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
