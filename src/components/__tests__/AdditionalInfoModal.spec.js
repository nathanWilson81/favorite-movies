import React from 'react'
import renderer from 'react-test-renderer'
import { AdditionalInfoModal } from '../../components'

describe('AdditionalInfoModal', () => {
  it('should match a snapshot when isOpen is false', () => {
    const component = renderer.create(
      <AdditionalInfoModal
        isOpen={false}
        onClose={jest.fn()}
        updateMovie={jest.fn()}
        movie={{ additionalInformation: '' }}
      >
        <div>children</div>
      </AdditionalInfoModal>
    )
    const snapshot = component.toJSON()
    expect(snapshot).toMatchSnapshot()
  })

  it('should match a snapshot', () => {
    const component = renderer.create(
      <AdditionalInfoModal
        isOpen
        onClose={jest.fn()}
        updateMovie={jest.fn()}
        movie={{ additionalInformation: '' }}
      >
        <div>children</div>
      </AdditionalInfoModal>
    )
    const snapshot = component.toJSON()
    expect(snapshot).toMatchSnapshot()
  })

  it('should match a snapshot when there is data', () => {
    const Component = renderer.create(
      <AdditionalInfoModal
        isOpen
        onClose={jest.fn()}
        updateMovie={jest.fn()}
        movie={{ additionalInformation: 'This is some data' }}
      />
    )
    const snapshot = Component.toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
