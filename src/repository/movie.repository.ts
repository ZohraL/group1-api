import { DB } from "../service"
import { Movie } from "../model/Movie"

class MovieRepositoryService {
    getMovies(limit: number = 10, offset: number = 0): Promise<Array<Movie>> {
        const queryString = `SELECT id, nom, type, annee, realisateur FROM MOVIE` // LIMIT ${limit} OFFSET ${offset}, limit = limite le nbre de colonne de ma requete et offset c'est le pt de départ de la requete

        return new Promise((resolve, reject) => {

            DB.query(queryString)
                .then((results: Array<any>) => {
                    resolve(results.map(row => new Movie(row)))
                }).catch(e => {
                    reject(e)
                })

        })
    }
}

export const MovieRepository = new MovieRepositoryService()