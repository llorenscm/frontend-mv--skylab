import React from 'react'
import AtomInput from '@s-ui/react-atom-input'
import PropTypes from 'prop-types'

const MoviesSearchBox = ({onSearch}) => (
  <div className="mv-MoviesSearchBox">
    <AtomInput type="text" onEnter={onSearch} />
  </div>
)

MoviesSearchBox.displayName = 'MoviesSearchBox'

MoviesSearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default MoviesSearchBox
