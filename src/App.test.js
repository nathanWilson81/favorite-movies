import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

describe('App', () => {
  let component
  beforeEach(() => {
    component = renderer.create(<App />)
  })

  it('should match a snapshot', () => {
    const snapshot = component.toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
