import GenericMovieError from './GenericMovieError'
import NotFoundMovieError from './NotFoundMovieError'


export default class MovieErrorsFactories{
    static genericMovieError = () => new GenericMovieError
    static notFoundMovieError = () => new NotFoundMovieError

}

