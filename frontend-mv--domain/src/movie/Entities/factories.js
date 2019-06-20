import MovieEntity from './MovieEntity'

export default class MoviesEntitiesFactories {
    static movieEntity = ({ id, title, image, description }) => new MovieEntity({ id, title, image, description })
}