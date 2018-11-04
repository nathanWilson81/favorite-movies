import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { noop } from 'lodash/fp'

const Backdrop = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 17, 20, 0.5);
`

const Content = styled.div`
  position: relative;
  z-index: 201;
  height: 60%;
  width: 60%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`

const StyledTextarea = styled.textarea`
  display: block;
  min-width: 100%;
  max-width: 100%;
  resize: vertical;
  border: 3px solid lightgrey;
`

const onBackdropClick = (e, cb) => (e.target === e.currentTarget ? cb() : noop)

export const AdditionalInfoModal = ({
  isOpen,
  onClose,
  updateMovie,
  movie
}) => (
  <React.Fragment>
    {isOpen && (
      <Backdrop onClick={e => onBackdropClick(e, onClose)}>
        <Content>
          <h1>Additional Information</h1>
          <StyledTextarea
            placeholder="Ex. Pros / Cons, Director, IMDB link"
            rows={10}
            value={movie.additionalInformation}
            onChange={e =>
              updateMovie(movie, { additionalInformation: e.target.value })
            }
          />
        </Content>
      </Backdrop>
    )}
  </React.Fragment>
)

AdditionalInfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
  movie: PropTypes.object
}

AdditionalInfoModal.defaultProps = {
  movie: null
}

export default AdditionalInfoModal
