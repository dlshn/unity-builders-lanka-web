import React from 'react'

export const Heading = ({title,...props}) => {
  return (
    <><h1 className='heading' {...props}><b>{title}</b></h1></>
  )
}
