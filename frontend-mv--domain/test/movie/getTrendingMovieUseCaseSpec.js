import Domain from '../../src'
import { expect } from 'chai'

let domain

describe('GetTrendingMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain()
    })
    it('#execute', async () => {
        // const myUseCase = domain.get('search_movies_use_case')
        // const movies = await myUseCase.execut({ keyword: 'batman' })

        const movies = await domain
            .get('get_trending_movie_use_case')
            .execute()
        console.log(movies)
        expect(movies).to.not.to.be.undefined
        expect(movies.list.length).to.equal(20)
        debugger //  eslint-disable-line
    })
})