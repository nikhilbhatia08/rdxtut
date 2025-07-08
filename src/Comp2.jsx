import React from 'react'
import useChanger from './useChanger'

function Comp2() {
    const [num, dispatch] = useChanger()
  return (
    <div>{num}</div>
  )
}

export default Comp2