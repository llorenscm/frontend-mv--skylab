import MovieRepository from './MovieRepository'

export default class HTTPMovieRepository extends MovieRepository {
    constructor({ fetcher, config, movieListValueObjectFactory, movieEntityFactory, notFoundMovieErrorFactory }) {
        super()
        this._fetcher = fetcher
        this._config = config
        this._movieListValueObjectFactory = movieListValueObjectFactory
        this._movieEntityFactory = movieEntityFactory
        this._notFoundMovieErrorFactory = notFoundMovieErrorFactory
    }

    async search({ keyword }) {
        const API_HOST = this._config.get('API_HOST')
        const API_KEY = this._config.get('API_KEY')

        const { data } = await this._fetcher.get(
            `${API_HOST}/search/movie?api_key=${API_KEY}&query=${keyword}`
        )

        const { results } = data
        const movieListValueObject = this._movieListValueObjectFactory({
            list: results
        })

        return movieListValueObject
    }

    async trending() {
        const API_HOST = this._config.get('API_HOST')
        const API_KEY = this._config.get('API_KEY')

        const { data } = await this._fetcher.get(
            `${API_HOST}/movie/popular?api_key=${API_KEY}`
        )

        const { results } = data
        const movieListValueObject = this._movieListValueObjectFactory({
            list: results
        })

        return movieListValueObject

    }

    async detail({ id }) {
        const API_HOST = this._config.get('API_HOST')
        const API_KEY = this._config.get('API_KEY')
        try {
            const { data } = await this._fetcher.get(
                `${API_HOST}/movie/${id}?api_key=${API_KEY}`
            )
            const movieEntity = this._movieEntityFactory({
                id: data.id,
                title: data.title,
                description: data.overview,
                image: data.poster_path
            })
            return movieEntity

        } catch (error) {
            if(error) throw this._notFoundMovieErrorFactory
        }

    }
}