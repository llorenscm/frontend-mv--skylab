import MovieValueObjectsFactories from '../ValueObjects/factories'

import FetchFactories from '../../Fetcher/factories'

import HTTPMovieRepository from './HTTPMovieRepository'

import MovieEntityFactories from '../Entities/factories'
import MovieErrorsFactories from '../Errors/factories';

export default class MovieRepositoriesFactories {
    static httpMovieRepository = ({ config }) =>
        new HTTPMovieRepository({
            fetcher: FetchFactories.httpFetcher(),
            movieListValueObjectFactory : MovieValueObjectsFactories.movieListValueObject,
            movieEntityFactory: MovieEntityFactories.movieEntity,
            notFoundMovieErrorFactory: MovieErrorsFactories.notFoundMovieError, 
            config
        })
}