import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

function Comp1() {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
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