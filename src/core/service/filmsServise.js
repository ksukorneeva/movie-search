import { EnvData } from '../constants/envData'
import { FilmModel } from '../../models/filmMode'

export class FilmsService {
    static #DefaultSearchValue = 'Marvel'

    static #Urls = {
        Main: (searchByName = FilmsService.#DefaultSearchValue)=>`https://www.omdbapi.com/?s=${searchByName}&apikey=${EnvData.FilmsApiKey}`,
        FilmById: (filmId) => `https://www.omdbapi.com/?i=${filmId}&apikey=${EnvData.FilmsApiKey}`
    }


    async getFilms(){
        const response = await fetch(FilmsService.#Urls.Main())
        const data = await response.json()
        const filmModels = data.Search.map(filmData) => {
            return new FilmModel({
                Poster: filmData.Poster,
                Title: filmData.Title,
                Year: filmData.Year,
                imbdID: filmData.imbdID
            })
        }
        console.log('filmModels', filmModels)
    }
}