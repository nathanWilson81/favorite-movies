import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map } from 'lodash/fp'
import MaterialIcon from 'material-icons-react'
import { Input, Dropdown, RatingStars } from '../components'

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  background: #fff;
  padding: 0.5rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.03);
  min-height: 45px;
  min-width: 450px;
`

const ClickableIcon = styled.span`
  margin-top: 5px;
  cursor: pointer;
`

export const MovieCards = ({
  movies,
  deleteMovie,
  updateMovie,
  openAdditionalInfoModal,
  starCount,
  genres
}) => (
  <React.Fragment>
    {map(
      movie => (
        <Card key={movie.id}>
          <ClickableIcon onClick={() => deleteMovie(movie)}>
            <MaterialIcon icon="delete" />
          </ClickableIcon>
          <Input
            type="text"
            onChange={e => {
              e.preventDefault()
              updateMovie(movie, { movieName: e.target.value })
            }}
            value={movie.movieName}
            placeholder="Enter your movie's name"
          />
          <Dropdown
            value={movie.movieGenre}
            onChange={e => updateMovie(movie, { movieGenre: e.target.value })}
            values={genres}
          />
          <RatingStars
            starCount={starCount}
            updateMovie={updateMovie}
            movie={movie}
          />
          <ClickableIcon onClick={() => openAdditionalInfoModal(movie)}>
            <MaterialIcon icon="info" />
          </ClickableIcon>
        </Card>
      ),
      movies
    )}
  </React.Fragment>
)

MovieCards.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
  openAdditionalInfoModal: PropTypes.func.isRequired,
  starCount: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired
}

export default MovieCards
