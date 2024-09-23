import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='loading-screen'>
      <CircleLoader color='#36d7b7' size={100} />
    </div>
  )
}

export default Loader
