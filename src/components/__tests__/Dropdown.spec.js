import React from 'react'
import renderer from 'react-test-renderer'
import { Dropdown } from '../../components'

describe('Dropdown', () => {
  it('should match a snapshot', () => {
    const component = renderer.create(
      <Dropdown
        onChange={jest.fn()}
        value={'test'}
        values={[{ label: 'test', value: 'test' }]}
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
