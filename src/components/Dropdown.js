import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map } from 'lodash/fp'

const StyledSelect = styled.select`
  height: 22px;
  background: #fff;
`

export const Dropdown = ({ onChange, value, values }) => (
  <StyledSelect onChange={onChange} value={value}>
    {map(
      val => (
        <option key={val.value} value={val.value}>
          {val.label}
        </option>
      ),
      values
    )}
  </StyledSelect>
)

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
}

export default Dropdown
