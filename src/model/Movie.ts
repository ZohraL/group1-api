export class Movie {
    id: number = null
    name: string = null
    type: string = null
    constructor(data?: any) {
        this.id = data.id
        this.name = data.name
        this.type = data.type
    }
    
}