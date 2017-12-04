import React from 'react'
import renderer from 'react-test-renderer'
import { P } from './components-emotion'
import serializer from 'jest-glamor-react'
import { sheet } from 'emotion'

expect.addSnapshotSerializer(
  serializer(sheet, (cn, index) => `emotion-${index}`)
)

it('renders as red', () => {
  expect(renderer.create(<P red />).toJSON()).toMatchSnapshot()
})

it('renders without red', () => {
  expect(renderer.create(<P />).toJSON()).toMatchSnapshot()
})
