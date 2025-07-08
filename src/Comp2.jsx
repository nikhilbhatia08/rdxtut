import React from 'react'
import { useSelector } from 'react-redux'

function Comp2() {
    const num = useSelector((state) => state.counter.value)
  return (
    <div>{num}</div>
  )
}

export default Comp2