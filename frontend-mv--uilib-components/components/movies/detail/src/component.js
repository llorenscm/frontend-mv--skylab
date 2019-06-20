import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MovieDetail extends Component {
  state = {
    detail: {}
  }

  async componentDidMount() {
    const detail = await this.props.domain
      .get('get_detail_movies_use_case')
      .execute({
        id: this.props.id
      })
    this.setState({detail})
  }
  render() {
    const {title, description, image} = this.state.detail
    const imageSrc = image && `https://image.tmdb.org/t/p/w300${image}`
    return (
      <div className="mv-MovieDetail">
        <h1>{title}</h1>
        <img src={imageSrc} />
        <p>{description}</p>
      </div>
    )
  }
}

MovieDetail.displayName = 'MovieDetail'
MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  domain: PropTypes.object
}

export default MovieDetail
