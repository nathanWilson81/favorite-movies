import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 350px;
  border: none;
  height: 1.5rem;
`

export const Input = ({ onChange, value, placeholder }) => (
  <StyledInput
    type="text"
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

Input.defaultProps = {
  placeholder: ''
}

export default Input
