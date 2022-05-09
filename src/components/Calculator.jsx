import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subtract, sum } from '../store/calculator/Calculator.actions'

function Calculator() {
  const dispatch = useDispatch()
  const result = useSelector(state => state.calculator)
  const [ a, setA ] = useState(0)
  const [ b, setB ] = useState(0)

  return (
    <>
      <input
        type='number'
        placeholder='a'
        onChange={ (e) => setA(e.target.value) } value={ a } />
      <input
        type='number'
        placeholder='b'
        onChange={ (e) => setB(e.target.value) } value={ b } />
      <button
        onClick={ () => dispatch(sum(Number(a), Number(b))) }>
        Somar
      </button>
      <button
        onClick={ () => dispatch(subtract(Number(a), Number(b))) }
      >
        Subtrair
      </button>
      <div>
        { result }
      </div>
    </>
  )
}

export default (Calculator)