import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MoviesSearchBox from 'mv-movies-search-box'
import MoviesSearchList from 'mv-movies-search-list'

class MoviesSearch extends Component {
  state = {
    list: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    const {list} = await this.props.domain
      .get('get_trending_movies_use_case')
      .execute()

    this.setState({list, loading: false})
  }

  _onSearch = async (_, {value}) => {
    this.setState({loading: true})
    const {list} = await this.props.domain
      .get('search_movies_use_case')
      .execute({
        keyword: value
      })

    this.setState({list, loading: false})
  }

  render() {
    return (
      <div className="mv-MoviesSearch">
        <MoviesSearchBox onSearch={this._onSearch} />
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <MoviesSearchList list={this.state.list} />
        )}
      </div>
    )
  }
}

MoviesSearch.displayName = 'MoviesSearch'

MoviesSearch.propTypes = {
  domain: PropTypes.object
}
export default MoviesSearch
