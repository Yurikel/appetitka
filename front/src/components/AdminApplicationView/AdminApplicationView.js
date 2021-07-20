import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delGoodsFromCartAC } from '../../utils/redux/actionCreators'

export default function CartGood({el}) {
  // const inputGood = useRef()
  // const handlerChange = () => {
  //   if(inputGood.current.value < 0){
  //     setValue(0)
  //   }
  //   else
  //   setValue(inputGood.current.value)
  // }
  // const dispatch = useDispatch()
  // const handlerDellFromCart = () => {
  //   dispatch(delGoodsFromCartAC(el.title))
  // }
  // const handlerMinus = () => {
  //   if(+inputGood.current.value <= 0){
  //     setValue(0)
  //   }
  //   else setValue(+inputGood.current.value - 1)
  // }
  // const handlerPlus = () => {
  //   setValue(+inputGood.current.value + 1)
  // }
    return (
        <div>
            <h5>{el.title}</h5>
            <p>Цена: ₽{el.price}</p>
            <p>Количество: {el.value} шт.</p>
              
        </div>
    )
}