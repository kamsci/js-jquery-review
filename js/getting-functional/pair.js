// pair(obj)
// Construct array pairs from objects.

// Example Input

var obj = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]

function pair(object) {
  array = []
  objKeysArray = Object.keys(obj);
  console.log("@objKeys:", objKeysArray)
  for(var i = 0; i < objKeysArray.length; i++) {
    tempArray = [];

    key = objKeysArray[i]
    tempArray.push(key);

    keyValue = object[key];
    tempArray.push(keyValue);

    array.push(tempArray);
  }
  // console.log("Array", array);
};

pair(obj);
