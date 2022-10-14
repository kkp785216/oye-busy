import React from 'react'
import Container from './Layout'

const Footer = ({color}) => {
  return (
    <div className={`bg-[${color ? '#EDEDED':'#343434'}]`}>
      <Container>
        Hello this is krishna
      </Container>
    </div>
  )
}

export default Footer