import React from 'react'
import PropTypes from 'prop-types'
import AtomCard from '@s-ui/react-atom-card'

const MoviesSearchList = ({list, linkFactory: Link}) => (
  <div className="mv-MoviesSearchList">
    <header className="mv-MoviesSearchList-header">List of movies</header>
    {list.map(({image, title, id}) => {
      const imageSrc = image && `https://image.tmdb.org/t/p/w200${image}`
      const renderMedia = () =>
        imageSrc && (
          <img className="mv-MoviesSearchList-itemImage" src={imageSrc} />
        )
      const renderContent = () => <header>{title}</header>
      const detailUrl = `/detail/${id}`

      return (
        <Link href={detailUrl} className="mv-MoviesSearchList-item" key={id}>
          <AtomCard media={renderMedia} content={renderContent} />
        </Link>
      )
    })}
  </div>
)

MoviesSearchList.displayName = 'MoviesSearchList'

MoviesSearchList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ),
  linkFactory: PropTypes.func
}

MoviesSearchList.defaultProps = {
  list: [],
  linkFactory: ({children, href, className}) => <a href={href} className={className}>{children}</a> // eslint-disable-line
}

export default MoviesSearchList
