import React from 'react'
import renderer from 'react-test-renderer'
import { RatingStars } from '../../components'

describe('Input', () => {
  it('should match a snapshot', () => {
    const component = renderer.create(
      <RatingStars
        starCount={5}
        updateMovie={jest.fn()}
        movie={{ movieRating: 2 }}
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
