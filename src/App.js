import React, { Component } from 'react'
import styled from 'styled-components'
import { map, equals, reject, filter, find } from 'lodash/fp'
import { MovieCards, AdditionalInfoModal, Dropdown } from './components'
import { getGenres, getNewMovie } from './constants'
import { persistToLocalStorage, getFromLocalStorage } from './localStorage'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f5f5f5;
`

const Header = styled.div`
  min-height: 140px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.03);
`

const CardContainer = styled.div`
  width: 60%;
  overflow-x: auto;
`

const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SortText = styled.h3`
  margin-bottom: 0;
  margin-top: 0;
  margin-right: 1rem;
`

const Button = styled.button`
  border-radius: 2rem;
  height: 2rem;
  margin-top: 1rem;
`

class App extends Component {
  state = {
    movies: [],
    genreSort: 'All',
    selectedMovie: null,
    additionalInfoModalOpen: false
  }

  componentDidMount() {
    const localStorageMovies = getFromLocalStorage('movies')
    if (localStorageMovies) {
      this.setState({
        movies: localStorageMovies
      })
    }
  }

  addNewMovie = genre =>
    this.setState({
      movies: this.state.movies.concat(getNewMovie(genre))
    })

  deleteMovie = movie =>
    this.setState(
      {
        movies: reject(equals(movie), this.state.movies)
      },
      () => persistToLocalStorage('movies', this.state.movies)
    )

  updateMovie = (movie, update) =>
    this.setState(
      {
        movies: map(
          val => (equals(val, movie) ? { ...movie, ...update } : val),
          this.state.movies
        )
      },
      () => persistToLocalStorage('movies', this.state.movies)
    )

  openAdditionalInfoModal = movie =>
    this.setState({
      selectedMovie: movie,
      additionalInfoModalOpen: true
    })

  closeAdditionalInfoModal = () =>
    this.setState({ selectedMovie: null, additionalInfoModalOpen: false })

  render() {
    const visibleMovies =
      this.state.genreSort === 'All'
        ? this.state.movies
        : filter(
            movie => movie.movieGenre === this.state.genreSort,
            this.state.movies
          )
    return (
      <React.Fragment>
        <AdditionalInfoModal
          isOpen={this.state.additionalInfoModalOpen}
          movie={
            this.state.selectedMovie &&
            find(
              movie => this.state.selectedMovie.id === movie.id,
              this.state.movies
            )
          }
          onClose={this.closeAdditionalInfoModal}
          updateMovie={this.updateMovie}
        />
        <Wrapper>
          <Header>
            <h1>My Favorite Movies</h1>
            <SortContainer>
              <SortText>Sort By Genre: </SortText>
              <Dropdown
                value={this.state.genreSort}
                values={[]
                  .concat({ label: 'All', value: 'All' })
                  .concat(getGenres())}
                onChange={e => {
                  this.setState({ genreSort: e.target.value })
                }}
              />
            </SortContainer>
            <Button onClick={() => this.addNewMovie(this.state.genreSort)}>
              Add New Movie
            </Button>
          </Header>
          <CardContainer>
            <MovieCards
              movies={visibleMovies}
              deleteMovie={this.deleteMovie}
              updateMovie={this.updateMovie}
              openAdditionalInfoModal={this.openAdditionalInfoModal}
              starCount={5}
              genres={getGenres()}
            />
          </CardContainer>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App
