import React, { useContext } from 'react'
import { COUNTER_CONTEXT } from '../App1'

const Chaild = () => {
    const {count} = useContext(COUNTER_CONTEXT)
  return (
    <div>
      <h1 className='font-bold'>{count}</h1>
    </div>
  )
}

export default Chaild
