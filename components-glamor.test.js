import React from 'react'
import renderer from 'react-test-renderer'
import {
  SomeInStylesheet,
  NoneInStylesheet,
  AllInStyleSheet
} from './components-glamor'
import serializer from 'jest-glamor-react'

expect.addSnapshotSerializer(serializer)

describe('component where all selectors are in the stylesheets', () => {
  it('renders', () => {
    expect(renderer.create(<AllInStyleSheet />).toJSON()).toMatchSnapshot()
  })
})

describe('component where some selectors are in the stylesheet', () => {
  it('renders', () => {
    expect(renderer.create(<SomeInStylesheet />).toJSON()).toMatchSnapshot()
  })
})

describe('component where none of the selectors are in the stylesheet', () => {
  it('renders', () => {
    expect(renderer.create(<NoneInStylesheet />).toJSON()).toMatchSnapshot()
  })
})
