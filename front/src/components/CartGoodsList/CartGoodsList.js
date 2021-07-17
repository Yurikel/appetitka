import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartGood from '../CartGood/CartGood'
import { clearCartAC } from '../../utils/redux/actionCreators'

export default function CartGoodsList() {
    let cart = useSelector(state => state.agentReducer.cart)
    const dispatch = useDispatch()
    
    function makeApplication(){
        fetch(`http://localhost:4000/agent/cart/${localStorage.getItem("itn") }`, {
            method:"POST", 
            headers:{"Content-Type":"application/json"}, 
            body:JSON.stringify({})
        }).then(res => res.json()).then(data => alert(data.message))
        dispatch(clearCartAC(""))
    }
    const clearCart = ()=>{
        dispatch(clearCartAC(""))
    }
    // console.log(cart);
    // cart.sort((prev, next) => prev.value - next.value ? 1 : -1)
    // console.log(cart);
    return (
        <div>
            
            {cart.map(el => <CartGood key={el.title} el={el} />)}
            {cart.length ? <>  <button onClick={makeApplication}>Сформировать заявку</button>
            <button onClick={clearCart}>Отчистить корзину</button> </>: <div>Ваша корзина пуста</div>}
            
        </div>
    )
}
