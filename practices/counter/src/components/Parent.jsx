import React, { useContext } from 'react'
import { COUNTER_CONTEXT } from '../App1'
import Chaild from './chaild'

const Parent = () => {
  const {count, setCount} = useContext(COUNTER_CONTEXT)

  console.log(count)
  const handleIncrement = () => {
    setCount(count + 1)
    console.log(count)
  }
  const handleDecrement = () => {
    if (count > 0) {
      return setCount(count - 1)
      console.log(count)
    } else {
      return alert("Something went Wrong")
    }
  }
  return (
    <div>
      <Chaild/>
      <br />
      <hr />
      <h1 className='font-bold'>{count}</h1>
      <div className='flex mt-5 ml-4'>
        <button onClick={handleIncrement} className='p-2 bg-green-400 rounded text-white'>Increment</button>
        <button onClick={handleDecrement} className='p-2 bg-red-400 rounded text-white'>Decrement</button>
      </div>
    </div>
  )
}

export default Parent
