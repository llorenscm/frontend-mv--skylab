import Domain from '../../src'
import { expect } from 'chai'

let domain

describe('SearchMovieUseCase', () => {
    beforeEach(() => {
        domain = new Domain()
    })
    it('#execut', async () => {
        // const myUseCase = domain.get('search_movies_use_case')
        // const movies = await myUseCase.execut({ keyword: 'batman' })

        const movies = await domain
            .get('search_movies_use_case')
            .execute({ keyword: 'batman' })
        console.log(movies)

        expect(movies).to.not.be.undefined
        expect(movies.list.length).to.equal(20)
        debugger //  eslint-disable-line

    })
})