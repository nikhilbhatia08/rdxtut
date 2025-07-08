import React from 'react'
import useChanger from './useChanger'
import { increment, decrement } from './redux/counterSlice';

function Comp1() {
    const [counter, dispatch] = useChanger();
  return (
    <div>
        <button className='decrease' onClick={() => dispatch(decrement())}>
            -
        </button>
        <div className='count'>
            {counter}
        </div>
        <button className='increase' onClick={() => dispatch(increment())}>
            +
        </button>
    </div>
  )
}

export default Comp1