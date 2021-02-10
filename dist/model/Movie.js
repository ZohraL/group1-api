"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(data) {
        this.id = null;
        this.name = null;
        this.type = null;
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
    }
}
exports.Movie = Movie;
