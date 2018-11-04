import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialIcon from 'material-icons-react'

// !important hack to get around material-icons bug where changing props wasn't changing the color of the icon
const ClickableIcon = styled.span`
  margin-top: 5px;
  cursor: pointer;
  i {
    color: ${p => (p.active ? 'gold !important' : '')};
  }
`

const StarsContainer = styled.div`
  display: flex;
`

export const RatingStars = ({ starCount, updateMovie, movie }) => {
  const stars = []
  for (let i = 1; i < starCount + 1; i++) {
    stars.push(
      <ClickableIcon
        key={i}
        active={movie.movieRating >= i}
        onClick={() => updateMovie(movie, { movieRating: i })}
      >
        <MaterialIcon icon="grade" />
      </ClickableIcon>
    )
  }
  return <StarsContainer>{stars}</StarsContainer>
}

RatingStars.propTypes = {
  starCount: PropTypes.number.isRequired,
  updateMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
}

export default RatingStars
