"use strict"
console.log(`main linked`)

const moviesArr = [];
const cinemasArr = []

const resultDiv = document.getElementById("resultDiv");

const notFoundMessage = element => `Error, "${element}" not found.`;
const successMessage = procedure => `${procedure} successfully!`;

const normalizeString = stringInput => stringInput.toUpperCase().trim();

const hardcodedMovie1 = new Movie ("Memoirs of a geisha", "Rob Marshall", 2005);
const hardcodedMovie2 = new Movie ("Inception", "Cristopher Nolan", 2010);
const hardcodedMovie3 = new Movie ("Gravity", "Alfonso Cuarón", 2013);
const hardcodedMovie4 = new Movie ("Ex Machina", "Alex Garland", 2014);
const hardcodedMovie5 = new Movie ("The Fifth Element", "Luc Besson", 1997);
const hardcodedMovie6 = new Movie ("Dune", "Denis Villeneuve", 2021);
const hardcodedMovie7 = new Movie ("A Space Odyssey", "Stanley Kubrick", 1968);

const hardcodedCinema1 = new Cinema ("CinemaLand", "Cinesa", "Barcelona");
const hardcodedCinema2 = new Cinema ("Cinelalala", "Renoir Cinemas", "L'Hospi");

moviesArr.push(hardcodedMovie1, hardcodedMovie2, hardcodedMovie3, hardcodedMovie4, hardcodedMovie5, hardcodedMovie6, hardcodedMovie7);
cinemasArr.push(hardcodedCinema1, hardcodedCinema2);

hardcodedCinema1.pushMoviesToCinema(hardcodedMovie1);
hardcodedCinema1.pushMoviesToCinema(hardcodedMovie3);
hardcodedCinema1.pushMoviesToCinema(hardcodedMovie5);
hardcodedCinema1.pushMoviesToCinema(hardcodedMovie7);


hardcodedCinema2.pushMoviesToCinema(hardcodedMovie2);
hardcodedCinema2.pushMoviesToCinema(hardcodedMovie4);
hardcodedCinema2.pushMoviesToCinema(hardcodedMovie6);

console.table(moviesArr);
console.table(cinemasArr);





function movieIsFoundFun(rawInputString) {

    resultDiv.innerHTML = "";

    let normInputString = normalizeString(rawInputString);

    let foundMovie = moviesArr.find( movie => movie.title.toUpperCase().trim() === normInputString );
    
    if (foundMovie !== null && foundMovie !== undefined) {
        return foundMovie;
    }
}


function indexOfMovieIsFound(rawInputString) {

    resultDiv.innerHTML = "";

    let normInputString = normalizeString(rawInputString);

    let foundIndexOfMovie = moviesArr.findIndex( movie => movie.title.toUpperCase().trim() === normInputString);
    
    if (foundIndexOfMovie !== -1) {
        return foundIndexOfMovie;
    }

}



function cinemaIsFoundFun(rawInputString) {

    resultDiv.innerHTML = "";
    
    let normInputString = normalizeString(rawInputString);
    console.log(`rawinputstring -> ${rawInputString} // normInputstring -> ${normInputString}`);

    
    let foundCinema = cinemasArr.find( cinema => cinema.name.toUpperCase().trim() === normInputString );

    console.log(`foundCinema en la funcion de busqueda despues del find -> ${foundCinema}`);

    if (foundCinema !== null && foundCinema !== undefined) {
        return foundCinema;
    }
}


function indexOfCinemaIsFound(rawInputString) {

    resultDiv.innerHTML = "";
    
    let normInputString = normalizeString(rawInputString);
    console.log(`rawinputstring -> ${rawInputString} // normInputstring -> ${normInputString}`);

    // let foundIndexOfCinema = cinemasArr.findIndex( cinema => cinema.name.toUpperCase().trim() === normInputString );
    let foundIndexOfCinema = cinemasArr.findIndex(cinema => {console.log(`Comparando: ${cinema.name.toUpperCase().trim()} === ${normInputString}`)});

    console.log(`foundindexofCinema en la funcion de busqueda despues del find -> ${foundIndexOfCinema}`);

    if (foundIndexOfCinema !== -1) {
        return foundIndexOfCinema;
    }
}



function createNewMovie() {

    resultDiv.innerHTML = "";

    let newMovieTitle = document.getElementById("newMovieNameInput").value;
    let newMovieDirector = document.getElementById("newMovieDirectorInput").value;
    let newMovieReleaseDate = parseInt(document.getElementById("newMovieReleaseDateInput").value);
    let userConfirmation = true;
    
    if (newMovieTitle === "" || newMovieDirector === "" || isNaN(newMovieReleaseDate)) {
        resultDiv.innerHTML = `All data is required, the release date must be a number.`
        return
    }

    let movieIsFound = movieIsFoundFun(newMovieTitle);

    if (movieIsFound) {
        userConfirmation = confirm(`A movie with this title already exists, are you sure you want to add this title?`);
    }

    if (!userConfirmation) {
        return;

    } else {
        let newInstanceOfMovie = new Movie (newMovieTitle, newMovieDirector, newMovieReleaseDate);
        moviesArr.push(newInstanceOfMovie);
        resultDiv.innerHTML = successMessage("Created") + "<br>" + newInstanceOfMovie.toString();
    }
}



function createNewCinema() {

    resultDiv.innerHTML = "";

    let newCinemaName = document.getElementById("newCinemaNameInput").value;
    let newCinemaCompany = document.getElementById("newCinemaCompanyInput").value;
    let newCinemaCity = document.getElementById("newCinemaCityInput").value;

    let userConfirmation;

    let newCinemaInstance = {};

    do {
        if (newCinemaName === "" || newCinemaCompany === "" || newCinemaCity === "") {
            resultDiv.innerHTML = `All data is required.`

            newCinemaName = document.getElementById("newCinemaNameInput").value;
            newCinemaCompany = document.getElementById("newCinemaCompanyInput").value;
            newCinemaCity = document.getElementById("newCinemaCityInput").value;
        }

    } while (newCinemaName === "" || newCinemaCompany === "" || newCinemaCity === "");

    let cinemaIsFound = cinemaIsFound(newCinemaName);

    if (cinemaIsFound !== undefined && cinemaIsFound !== null) {
        userConfirmation = confirm(`A movie with this title already exists, are you sure you want to add this title anyways?`);
    }

    if (!userConfirmation) {
        return;

    } else {
        newCinemaInstance = new Cinema (newCinemaName, newCinemaCompany, newCinemaCity);
        cinemasArr.push(newCinemaInstance);
        resultDiv.innerHTML = successMessage("Cinema added") + "<br>" + newCinemaInstance.toString();
    }
}



function pushMovieToCinemaFun() {

    resultDiv.innerHTML = "";

    let movieToPush = document.getElementById("movieToPush").value;
    let targetedCinema = document.getElementById("targetedCinema").value;

    let foundMovie = movieIsFoundFun(movieToPush);
    let foundCinema = cinemaIsFoundFun(targetedCinema);
    console.log(`this is foundCinema in line 163 -> ${foundCinema}`)

    if (foundMovie !== undefined && foundMovie !== null && foundCinema !== undefined && foundCinema !== null) {
        foundCinema.pushMoviesToCinema(foundMovie);
        resultDiv.innerHTML = successMessage(`Process completed`);

    } else {
        resultDiv.innerHTML = notFoundMessage("movie/cinema");
    }
}



function readData() {

    let selectMenuShowData = document.getElementById("selectShowData").value; // "movie" // "cinema"
    let rawInput = document.getElementById("instanceToShow").value;

    let foundMovie = movieIsFoundFun(rawInput);
    let foundCinema = cinemaIsFoundFun(rawInput);

    
        switch (selectMenuShowData) {
            case "movie" :
                if (foundMovie !== undefined) {
                    resultDiv.innerHTML = foundMovie.toString();
                    console.log(`estamos entrando al switch de readData()`);
                } else {
                    return resultDiv.innerHTML = notFoundMessage(rawInput);
                }
                break;
    
            case "cinema" :
                if (foundCinema !== undefined) {
                    resultDiv.innerHTML = foundCinema.toString();
                    console.log(`estamos entrando al switch de readData()`);
                } else {
                    return resultDiv.innerHTML = notFoundMessage(rawInput);
                }
                break;

            default : resultDiv.innerHTML = `Choose one option, please.`;
        }
}



function deleteInstance() {

    resultDiv.innerHTML = "";

    let selectMenuDeleteData = document.getElementById("selectDeleteData").value;
    let rawInput = document.getElementById("instanceToDelete").value;

    let indexOfMovie = indexOfMovieIsFound(rawInput);
    let indexOfCinema = indexOfCinemaIsFound(rawInput);

    let foundMovie = movieIsFoundFun(rawInput);
    let foundCinema = cinemaIsFoundFun(rawInput);

    if (selectMenuDeleteData === "movie") {

        if ( foundMovie !== undefined && indexOfMovie !== -1) {
            moviesArr.splice(indexOfMovie, 1);
            resultDiv.innerHTML = successMessage(`${rawInput} deleted`);

        } else {
            resultDiv.innerHTML = notFoundMessage(rawInput);
        }

    } else if (selectMenuDeleteData === "cinema") {

        if ( foundCinema !== undefined && indexOfCinema !== -1) {
            cinemasArr.splice(indexOfCinema, 1);
            resultDiv.innerHTML = successMessage(`${rawInput} deleted`);

        } else {
            resultDiv.innerHTML = notFoundMessage(rawInput);
        }

    } else {
        resultDiv.innerHTML = `Choose one option, please.`;
    }

console.log(`rawInput: ${rawInput}`);
console.log(`indexOfMovie: ${indexOfMovie}`);
console.log(`indexOfCinema: ${indexOfCinema}`);
console.log(`selectMenuDeleteData: ${selectMenuDeleteData}`);
}





// switch (selectMenuDeleteData) {
//     case "movie" :
//         if (indexOfMovie !== -1) {
//             moviesArr.splice(indexOfMovie, 1);
//             resultDiv.innerHTML = successMessage(`${rawInput} deleted`);
//         } else {
//             resultDiv.innerHTML = notFoundMessage(rawInput);
//         }
//         break;

//     case "cinema" :
//         if (indexOfCinema !== -1) {
//             cinemasArr.splice(indexOfCinema, 1);
//             resultDiv.innerHTML = successMessage(`${rawInput} deleted`);
//         } else {
//             resultDiv.innerHTML = notFoundMessage(rawInput);
//         }
//         break;

//     default : resultDiv.innerHTML = `Choose one option, please.`;
// }