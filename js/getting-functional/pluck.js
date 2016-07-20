// pluck(arr, key)
// Given an array of objects, pluck the object values associated with the provided key.

// Example Input

var albums = [
  { name: 'Gossamer', artist: 'Passion Pit' },
  { name: 'Sigh no more', artist: 'Mumford and Sons' },
  { name: 'Time to Pretend', artist: 'MGMT' }
];

// Example Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]


function pluck(array, key) {
  resultArray = [];
  for(var i = 0; i < array.length; i++) {
    if (array[i][key]) {
      resultArray.push(array[i][key]);
    }
  }
  return resultArray;
}

var result = pluck(albums, "artist");

console.log(result);
