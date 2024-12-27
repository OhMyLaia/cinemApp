"use strict"
console.log(`cinema class linked`)


class Cinema {

    static message = `No movies found`;

    constructor (name, company, city) {
        this._name = name;
        this._company = company;
        this._city = city;
        this._moviesArr = [];
    }

    get name() { return this._name }
    get company() { return this._company } 
    get city() { return this._city }
    
    pushMoviesToCinema(newMovie) { this._moviesArr.push(newMovie) }

    toString() {
        return `
        <pre>
        Name: ${this.name}
        Company: ${this.company}
        City: ${this.city}
        Current movies: ${this._moviesArr.length === 0 ? `No movies yet` : this._moviesArr.join("<br>")}
        </pre>
        `
    }
    //${ this._moviesArr.forEach( movie => movie.toString() + "<br>" ) }
    // adding documentation here 
    // change to commit and push
    // ejercicio de head -> documentation
}