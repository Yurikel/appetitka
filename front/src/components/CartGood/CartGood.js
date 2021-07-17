import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delGoodsFromCartAC } from '../../utils/redux/actionCreators'

export default function CartGood({el}) {
    const [value, setValue] = useState(el.value)
  const inputGood = useRef()
  const handlerChange = () => {
    if(inputGood.current.value < 0){
      setValue(0)
    }
    else
    setValue(inputGood.current.value)
  }
  const dispatch = useDispatch()
  const handlerDellFromCart = () => {
    dispatch(delGoodsFromCartAC(el.title))
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
        <div>
          <div className="box goodsbox">
            <h5>{el.title}</h5>
            <p>Цена: ₽{el.price}</p>
            <div>
              <button onClick={handlerMinus} className="button primary">-</button>
              <input ref={inputGood} type='number' onChange={handlerChange} value={value} />
              <button onClick={handlerPlus} className="button primary">+</button>
            </div>
            <button onClick={handlerDellFromCart}>удалить из корзины</button>
          </div>
        </div>
    )
}
