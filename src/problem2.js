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


}

/**
 * return an integer representing the number of matching milkboxes that are available. 
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
  if(steps == path.length)
  {
    //validate format of path
    if(/U|D/.test(path))
    {
      return true;
    }
  }

  return false;
}

module.exports = {
  validatePathInput
}
