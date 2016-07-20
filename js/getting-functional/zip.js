// zip(array, array2)
// Merge two arrays with the values at their corresponding positions

// Example Input

var artists = ['Passion Pit', 'Mumford and Sons', 'MGMT'];
var albums = ['Gossamer', 'Sigh no more', 'Time to Pretend'];

// Example Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]

function zip(array, array2) {
  zipArray = [];
  if (array.length == array2.length) {
    for(var i = 0; i < array.length; i++) {
      zipMiniArray = [];

      zipMiniArray.push(array[i]);
      zipMiniArray.push(array2[i]);

      zipArray.push(zipMiniArray);
    }
  return zipArray;
  } else {
    error = "Error, Arrays are not the same length"
    return error;
  };
}

var result = zip(artists, albums);

console.log(result);
