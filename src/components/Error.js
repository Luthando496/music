import React from 'react'

const Error = ({name}) => {
  return (
    <div className='error'>
      <h1>{name.toUpperCase()}</h1>
      <h2>{name === 'no data' && 'No Such ID Available'}</h2>
      <h2>{name === 'No Results of that search available' ? 'search a different artist, song or album' : 'Try Checking Your Internet Connection.' }</h2>
    </div>
  )
}

export default Error