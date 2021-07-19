import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Good from "../Good/Good";
import { clearCartAC } from "../../utils/redux/actionCreators";

export default function CartGoodsList() {
  let user = useSelector((state) => state.agentReducer.currentUser);
  let cart = useSelector((state) => state.agentReducer.cart);
  let goods = useSelector((state) => state.goodsReducer.goods);
  const dispatch = useDispatch();
  function totalCost(){
    let result = 0;
     cart.forEach(el =>{
      let price = 0; 
      for(let i=0; i<goods.length; i++){
        if (goods[i].title == el.title){
          price = +goods[i].price
        }
      }
      result += price * el.value
    })
    return result;
  }
  
   let total = totalCost();
  function makeApplication() {
    // console.log(cart);
    fetch(`http://localhost:4000/agent/cart/${user}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({goods:cart}),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
    dispatch(clearCartAC(""));
  }
  const clearCart = () => {
    dispatch(clearCartAC(""));
  };
  
  return (
    <> 
    <p> Конечная цена = {total} </p>
    <div className="goodslist">
    {cart.map((el) => (
      <Good
        key={el.title}
        el={goods.find((good) => good.title === el.title)}
      />
    ))}
  </div>
      <div className="confirmresetbuttons">
        {cart.length ? (
          <>
          <div style={{width:"100%", borderTop:"5px solid #f56a6a", paddingTop:"10px"}}>
            {" "}
            <button onClick={makeApplication} className="button primary">
              Сформировать заявку
            </button>
            <button onClick={clearCart} className="button primary">
              Отчистить корзину
            </button>{" "}
            </div>
          </>
        ) : (
          <div>Ваша корзина пуста</div>
        )}
      </div>
      
    </>
  );
}
