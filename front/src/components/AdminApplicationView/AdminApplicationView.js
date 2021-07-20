import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delGoodsFromCartAC, initAgentsAC, initApplicationsAC, requestGoodsAC } from '../../utils/redux/actionCreators'

export default function CartGood({el}) {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //       console.log("something");
    //       fetch('http://localhost:4000/admin/applications')
    //       .then(response => response.json())
    //       .then(applications => dispatch(initApplicationsAC(applications.applications)))
    //       fetch('http://localhost:4000/admin/agents')
    //         .then(response => response.json())
    //         .then(agents => dispatch(initAgentsAC(agents.agents)))
    //         fetch('http://localhost:4000/admin/goodslist')
    //         .then(response => response.json())
    //         .then(goods => dispatch(requestGoodsAC(goods.goods)))
    //   }, [dispatch])
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