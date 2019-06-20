import Domain from '../../src'
import { expect } from 'chai'
import NotFoundMovieError from '../../src/movie/Errors/NotFoundMovieError'

let domain

describe('GetDetailMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain()
    })
    it('#execute', async () => {
        // const myUseCase = domain.get('search_movies_use_case')
        // const movies = await myUseCase.execut({ keyword: 'batman' })

        const movies = await domain
            .get('get_detail_movie_use_case')
            .execute({ id: 550 })
        console.log(movies)

        expect(movies).to.not.to.be.undefined
        expect(movies.id).to.equal(550)
        expect(movies.title).to.equal('Fight Club')

        debugger //  eslint-disable-line
    })

    // it('#execute not found', async () => {

    //     const movies = await domain
    //         .get('get_detail_movie_use_case')
    //         .execute({ id: 5241231250 })
    //     console.log(movies)

    //         .then(() => expect(false).to.be.true)
    //         .catch(error => {
    //             expect(error).to.be.instanceOf(NotFoundMovieError)
    //         })

    //     debugger //  eslint-disable-line
    // })
})