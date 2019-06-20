import MovieListValueObject from './MovieListValueObject'
import MoviesEntitiesFactories from '../Entities/factories';

export default class MovieValueObjectsFactories {
    static movieListValueObject = ({ list }) =>
        new MovieListValueObject({
            listEntities: list.map(movie => MoviesEntitiesFactories.movieEntity({
                id: movie.id,
                title: movie.title,
                image: movie.poster_path,
                description: movie.overview
            }))
        })
}