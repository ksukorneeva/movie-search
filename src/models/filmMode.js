export class FilmModel {
    #poster
    #title
    #year
    #imbdID
    #isFavorite

    constructor(filmData){
        this.#poster = filmData.Poster
        this.#title = filmData.Title
        this.#year = filmData.Year
        this.#imbdID = filmData.imbdID
        this.#isFavorite = false
    }

    getPoster() {
        return this.#poster
    }

    getTitle() {
        return this.#title
    }

    getYear() {
        return this.#year
    }

    getID() {
        return this.#imbdID
    }

    getIsFavorite(){
        return this.#isFavorite
    }
    setIsFavorite(isFavorite){
        this.#isFavorite = isFavorite
    }
}