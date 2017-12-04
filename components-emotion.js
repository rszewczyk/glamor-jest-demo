import React from 'react'
import styled from 'react-emotion'

export const P = styled.p`
  color: ${props => (props.red ? 'red' : null)};
`
