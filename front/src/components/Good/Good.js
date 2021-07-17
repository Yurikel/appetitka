import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoodsToCartAC } from '../../utils/redux/actionCreators'

export default function Good({el}) {
  const [value, setValue] = useState(0)
  const inputGood = useRef()
  const handlerChange = () => {
    if(inputGood.current.value < 0){
      setValue(0)
    }
    else
    setValue(inputGood.current.value)
  }
  const dispatch = useDispatch()
  const handlerAddToCart = () => {
      if(+inputGood.current.value > 0)
    dispatch(addGoodsToCartAC({title: el.title, value: inputGood.current.value}))
  }
  const handlerMinus = () => {
    if(+inputGood.current.value <= 0){
      setValue(0)
    }
    else setValue(+inputGood.current.value - 1)
  }
  const handlerPlus = () => {
    setValue(+inputGood.current.value + 1)
  }
    return (
        <div style={{display:"flex"}}>
            <h2>{el.title}</h2>
            <p>{el.price}</p>
            <button onClick={handlerMinus}>-</button>
            <input ref={inputGood} type='number' onChange={handlerChange} value={value} />
            <button onClick={handlerPlus}>+</button>
            <button onClick={handlerAddToCart}>Добавить в корзину</button>
        </div>
    )
}