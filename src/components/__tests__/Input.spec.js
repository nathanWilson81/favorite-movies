import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '../../components'

describe('Input', () => {
  it('should match a snapshot', () => {
    const component = renderer.create(
      <Input onChange={jest.fn()} value={'test'} placeholder="Foo" />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
