const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDir = moviesArray.map(getDir=> getDir.director);
        uniqueDir =[...new Set(allDir)]
    return uniqueDir
} //console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 const filterSpilberg = moviesArray.filter((data)=>data.director==='Steven Spielberg' && data.genre.includes('Drama'))
 //const filterDrama = filterSpilberg.filter((data)=>data.genre.includes('Drama'))
 return filterSpilberg
 
} //console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let totalAverage = 0
  moviesArray.forEach((data) =>{totalAverage+= data.score}); 
  return (totalAverage/moviesArray.length).toFixed(2)
} //console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let averageDrama =0
  const  drama  = moviesArray.filter((data)=>data.genre.includes('Drama'))
  drama.forEach((data)=>{averageDrama+=data.score})
  return (averageDrama/drama.length).toFixed(2)
} //console.log(dramaMoviesScore(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies  = moviesArray.map((data)=>data).sort((movie1,movie2)=>movie1.year-movie2.year || movie1.title - movie2.title)
  return sortedMovies
} //console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const order20Movies = moviesArray.map((data)=>data.title).sort()
  order20Movies.length=20
  return order20Movies
} //console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

console.log(moviesArray[0].duration.slice(0,5).replace('h ','.'))

} //console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
