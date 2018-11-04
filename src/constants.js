import uuid from 'uuid/v4'

const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Childrens',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Horror',
  'Family',
  'Fantasy',
  'Historical',
  'Medical',
  'Musical',
  'Paranormal',
  'Romance',
  'Sport',
  'Science fiction',
  'Thriller',
  'War',
  'Western'
]

export const getNewMovie = genre => ({
  id: uuid(),
  movieName: '',
  movieGenre: genre === 'All' ? 'Action' : genre,
  movieRating: 0,
  additionalInformation: ''
})

export const getGenres = () =>
  genres.map(genre => ({ value: genre, label: genre }))
