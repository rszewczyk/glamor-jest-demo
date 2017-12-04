import React from 'react'
import { css } from 'glamor'

const red = css({
  color: 'red'
})

const inline = css({
  display: 'inline'
})

export const AllInStyleSheet = () => <p className={`${inline} ${red}`} />

export const SomeInStylesheet = () => (
  <p className={`${inline} css-foo container`} />
)

export const NoneInStylesheet = () => (
  <p className="css-foo css-bar container" />
)
