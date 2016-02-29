#Javascript Drills

Using the following data

Construct functions to do the following:

##pluck(someArray, "someKey")
Using `map` construct a function called `pluck` that will input array, and grab all matching keys. The function should return the value of keys in an array.

Input

```js
var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];
```

Output

```js
[ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]
```

##zip(array, array2)
Take two arrays, and combine them.

Input

```js
var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];
```

Output

```js
[ [ 'Passion Pit', 'Gossamer' ],
  [ 'Mumford and Sons', 'Sigh no more' ],
  [ 'MGMT', 'Time to Pretend' ] ]
```

##pair(obj)
Construct array pairs from Objects.

You can grab all keys using `Object.keys(obj)` and iterate over it like any other array.

Input

```js
var obj = {
    "Brian": "Hague",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}
```

Output

```js
[ [ 'Brian', 'Hague' ],
  [ 'Sarah', 'Hanley' ],
  [ 'Lenny', 'Urbanowski' ] ]
```

##isPalindrome(string)
Create a method called `is_palindrome` to check if a string is a palindrome. Do not use any reverse method.

##fib(n)

Write a method to return the nth number of Fibonacci sequence.

`http://en.wikipedia.org/wiki/Fibonacci_number`

---


#**BONUS**

##Print a multiplication table
Write a program to print out a multiplication table, from 1x1 to 12x12. This should look like:

```
   1   2   3   4   5   6   7   8   9  10  11  12
   2   4   6   8  10  12  14  16  18  20  22  24
   3   6   9  12  15  18  21  24  27  30  33  36
   4   8  12  16  20  24  28  32  36  40  44  48
   5  10  15  20  25  30  35  40  45  50  55  60
   6  12  18  24  30  36  42  48  54  60  66  72
   7  14  21  28  35  42  49  56  63  70  77  84
   8  16  24  32  40  48  56  64  72  80  88  96
   9  18  27  36  45  54  63  72  81  90  99 108
  10  20  30  40  50  60  70  80  90 100 110 120
  11  22  33  44  55  66  77  88  99 110 121 132
  12  24  36  48  60  72  84  96 108 120 132 144
```
