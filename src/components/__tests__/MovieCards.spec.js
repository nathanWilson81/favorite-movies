import React from 'react'
import renderer from 'react-test-renderer'
import { MovieCards } from '../../components'

describe('MovieCards', () => {
  let component
  beforeEach(() => {
    component = renderer.create(
      <MovieCards
        movies={[{ id: 'foo', movieName: 'Bar', movieGenre: 'FooBar' }]}
        deleteMovie={jest.fn()}
        updateMovie={jest.fn()}
        openAdditionalInfoModal={jest.fn()}
        starCount={5}
        genres={[{ value: 'Foo', label: 'Foo' }]}
      />
    )
  })

  it('should match a snapshot', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
