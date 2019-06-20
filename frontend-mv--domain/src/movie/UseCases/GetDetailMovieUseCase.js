export default class GetDetailMovieUseCase{
    constructor({repository}){
        this._repository = repository
    }

    async execute({id}){
        const movieEntity = await this._repository.detail({id})
        return movieEntity.toJSON()
    }
}