/*const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["me", "cy"],
  bark: "woof",
};

// console.log(myDog);
myDog.name = "saf gee";
myDog["food"] = "dog bite";
// console.log(myDog);

delete myDog.tails;
console.log(myDog);


function phoneticLookup(val) {
  let result = "";

  const lookUp = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
  };
  result = lookUp[val];
  return result;
}

console.log(phoneticLookup("delta"));


const myObj = {
  babe: "yeah",
  smart: "maybe",
  faf: "nah",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "not found";
  }
}

console.log(checkObj("ugly"));


const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8t", "LP"],
    gold: true,
  },

  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["YouTube Video"],
  },
];

// ACCESSING NESTED OBJECTS
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


// ACCESSING NESTED ARRAYS
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

// RECORD COLLECTION

const collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love A Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

const collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecord(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
updateRecord(2468, "tracks", "test;");
updateRecord(5439, "tracks", "eat");

console.log(updateRecord(5439, "artist", "ABBA"));

// ITERATE WITH WHILE LOOP

const myArray = [];

let i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);


// ITERATE ODD NUMBERS WITH A FOR LOOP
// example ith even number
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

const myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);


// COUNT BACKWARDS WITH FOR LOOPS
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

const myArray = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);


// NESTING FOR LOOPS
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

let product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);*/
console.log("hello world");
