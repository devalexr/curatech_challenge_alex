
const MIN_STEPS_IN_PATH = 2;

const output = countingValleys(12, 'DDUUDDUDUUUD');

console.log('OUTPUT: ', output);

/**
 * return an integer representing the number of matching milkboxes that are available. 
 *
 * @param {int} steps - the number of steps on the hike
 * @param {string} path a string describing the path
 * 
 * @return {number} the number of valleys traversed
 *
 */

function countingValleys (steps, path) {

  let result = 0;

  //validate input
  if(validatePathInput(steps, path) && validatePathFinishInSeaLevel(path))
  {
    const pathCharacterArray = path.split('');

    console.log('path units array', pathCharacterArray);
    let valleys = 0;
    let seaLevelCounter = 0; 

    Object.keys(pathCharacterArray).map(function (i) {

      const pathCharacter = pathCharacterArray[i];

      (pathCharacter == 'U') ? seaLevelCounter++ : seaLevelCounter--;
      
      //first unit advaced
      if(i > 1)
      {
        //is below to the sea level 
        if(seaLevelCounter < 0)
        {
          /*
          search valley format ("UD") below to the sea level 
          */

          if(pathCharacterArray[i - 1] == 'U' && pathCharacter == 'D')
          {
            console.log('VALLEY FOUND! step: ', i);

            valleys++;
          }
        }
      }

    });

    result = valleys;

  }
  else
  {
    console.error('Input error (Run test cases)');
  }

  return result;
}

/**
 * validate is a valid format path
 *
 * @param {int} steps - the number of steps on the hike
 * @param {string} path a string describing the path
 * 
 * @return {boolean} is valid path
 * 
 * @example
 * 
 * path: "DDUUDDUDUUUD" -> true
 * path: "DDUUDDsDUsUD" -> false
 *
 */

function validatePathInput(steps, path) {

  //validate path.length
  if(steps == path.length && steps >= MIN_STEPS_IN_PATH)
  {
    //validate format of path
    if(/U|D/.test(path))
    {
      return true;
    }
  }

  return false;
}

/**
 * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level,
 * this funtion validates it
 *
 * @param {string} path a string describing the path
 * 
 * @return {boolean} is valid path
 * 
 * @example
 * 
 * path: "DDUUDDUDUUUD" -> true
 * path: "DDUUDDDUUDDDDDDDD" -> false
 *
 */

function validatePathFinishInSeaLevel(path) {

  const pathCharacterArray = path.split('');
  let seaLevelCounter = 0;
  let isValid = false;

  Object.keys(pathCharacterArray).map(function (i) {

    if(pathCharacterArray[i] == 'U')
    {
      seaLevelCounter++;
    }
    else
    {
      seaLevelCounter--;
    }

  });

  isValid = (seaLevelCounter == 0);

  if(!isValid)
  {
    console.error('Sea level in path: ', seaLevelCounter);
  }

  return isValid;
}



module.exports = {
  validatePathInput,
  validatePathFinishInSeaLevel
}
