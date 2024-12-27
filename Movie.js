"use strict"
console.log(`movie class linked`)


class Movie {
    constructor (title, director, releaseDate) {
        this._title = title;
        this._director = director;
        this._releaseDate = parseInt(releaseDate);
    }

    get title () { return this._title }
    get director () { return this._director }
    get releaseDate () { return this._releaseDate }

    toString() {
        return `
        <pre>
        Title: ${this.title}
        Director: ${this.director}
        Release date: ${this._releaseDate}
        </pre>`
    }
}