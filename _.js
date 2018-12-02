const _ = { 
  //clamp
  clamp(number, lower, upper) {
  	let lowerClampedValue = Math.max(number, lower); 
  	let clampedValue = Math.min(lowerClampedValue, upper); 
    return clampedValue;
  },
 //inRange 
	inRange(number, start, end) {
  	if(end === undefined) {
    	end = start;
    	start = 0;
  };
    if(start > end) {
      let temp = end;
      end = start;
      start = temp;
    };
    let isInRange = start <= number < end;
    	if(isInRange) {
      	return true;
    	} else {
      	return false;
      }
  },
  //words
	words(string) {
    let words = string.split(' ');
    return words;
  },
 //pad 
  pad(string, length) {
    if (length < 0) {
      length *= -1;
    }
    if (string.length >= length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - (string.length + startPaddingLength);
    let paddedString = ' ';
    return paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
  },
  //has
  has(object, key) {
    let hasValue = object.hasOwnProperty(key);
    return hasValue;
  },
  //invert
  invert(object) {
    let invertedObject = {};
    let keys = Object.keys(object);
    for ( let i = keys.length -1; i >= 0 ; i-- ) {     invertedObject[`${object[`${keys[i]}`]}`] = keys[i];
                                                 }
    return invertedObject;
  },
  //findKey
  findKey(object, predicate) {
    let keys = Object.keys(object);
    for ( let i = 0 ; i < keys.length; i++ ) {
      let predicateReturnValue = predicate(object[`${keys[i]}`]);
      if (predicateReturnValue) {
        return keys[i];
      }
      return undefined;
    }
  },
  //drop
  drop(array, n) {
    if (typeof(n) === 'undefined') {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  //dropWhile
  dropWhile(array, predicate) {
    let dropNumber = 0;
    while (dropNumber < array.length && predicate(array[dropNumber], predicate, array))              
    {
      dropNumber += 1;
    }
    return array.slice(dropNumber);
  },
  chunk(array, size) {
    if ( size === 0 ) {
      size = 1 ;
    }
    let arrayChunks = [] ;
    for (let arrayChunk = 0 ; arrayChunk < array.length ; arrayChunk += size) {
      arrayChunks.push(array.slice(arrayChunk, arrayChunk+size));
    }
    return arrayChunks;
  }
};


// Do not write or modify code below this line.
module.exports = _;





// Do not write or modify code below this line.
module.exports = _;