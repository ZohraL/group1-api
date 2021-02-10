"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
class MovieRepositoryService {
    /**
     * GET::REQUEST
     */
    getMovies() {
        const queryString = `SELECT id, nom, type, annee, realisateur FROM MOVIE`; // LIMIT ${limit} OFFSET ${offset}, limit = limite le nbre de colonne de ma requete et offset c'est le pt de départ de la requete
        return new Promise((resolve, reject) => {
            // DB.query(queryString)
            //     .then((results: Array<any>) => {
            //         resolve(results.map(row => new Movie(row)))
            //     }).catch(e => {
            //         reject(e)
            //     })
        });
    }
}
exports.MovieRepository = new MovieRepositoryService();
