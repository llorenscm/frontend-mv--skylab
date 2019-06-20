import MovieRepositoriesFactories from '../Repositories/factories'
import SearchMovieUseCase from "./searchMovieUseCase"
import GetTrendingMovieUseCase from './GetTrendingMovieUseCase'
import GetDetailMovieUseCase from './GetDetailMovieUseCase'

export default class MovieUseCasesFactories {
    static searchMovieUseCase = ({ config }) =>
        new SearchMovieUseCase({
            repository: MovieRepositoriesFactories.httpMovieRepository({ config })
        })
    static getTrendingMovieUseCase = ({ config }) =>
        new GetTrendingMovieUseCase({
            repository: MovieRepositoriesFactories.httpMovieRepository({ config })
        })
    static getDetailMovieUseCase = ({ config }) =>
        new GetDetailMovieUseCase({
            repository: MovieRepositoriesFactories.httpMovieRepository({ config })
        })
}