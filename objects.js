// let someObject = {};

// someObject._name = "Hedwig";

// someObject.age = 6;

// console.log(someObject);

// let prop = "color";

// someObject[prop] = "red";

// someObject.123 = true;

//**********************************

let someObject = {
  friends: [{ name: "Holly", age: 9 }, { name: "Andrew" }, { name: "Sarah" }],
  color: "baby blue",
  isEvil: true
};

//console.log(someObject.friends[0]);
//console.log(someObject.friends[0].name);

//***********************************
//MOVIE DATA:

let movies = [
  {
    title: "Titanic",
    rating: 4,
    year: 2004,
    hasWatched: true
  },
  {
    title: "Mango Jango",
    rating: 3,
    year: 2018,
    hasWatched: false
  },
  {
    title: "Peter Pan",
    rating: 5,
    year: 1997,
    hasWatched: true
  }
];

movies.forEach(movie => {
  if (movie.hasWatched) {
    console.log(`You have watched "${movie.title}" - ${movie.rating} stars`);
    // console.log("You have watched", movie.title, movie.rating, "- stars");
  } else {
    console.log(
      `You have not watched "${movie.title}" - ${movie.rating} stars`
    );
    // console.log("You have not watched", movie.title, movie.rating, "stars");
  }
  //   console.log(movie);
  //   console.log(movies);
});

// console.log(movies);
