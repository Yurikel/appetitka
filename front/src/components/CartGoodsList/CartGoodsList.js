import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Good from "../Good/Good";
import { clearCartAC } from "../../utils/redux/actionCreators";
import { getCookie } from 'react-use-cookie';

export default function CartGoodsList() {
  let cart = useSelector((state) => state.agentReducer.cart);
  let goods = useSelector((state) => state.goodsReducer.goods);
  const dispatch = useDispatch();
  const user = getCookie('user')
  console.log(user)
  function makeApplication() {
    fetch(`http://localhost:4000/agent/cart/${localStorage.getItem("itn")}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
    dispatch(clearCartAC(""));
  }

  const clearCart = () => {
    dispatch(clearCartAC(""));
  };

  // const calculateTotal = () => {
  // };

  return (
    <div className="inline">
      <div className="goodslist">
        {cart.map((el) => (
          <Good
            key={el.title}
            el={goods.find((good) => good.title === el.title)}
          />
        ))}
      </div>
      <div className="confirmblock">
        {cart.length ? (
          <>
            <h4>Ориентировочная стоимость заказа:</h4>
            <h2>100 ₽</h2>
            <textarea placeholder="Комментарий к заказу..."></textarea>
            <button onClick={makeApplication} className="button primary">
              Сформировать заявку
            </button>
            <button onClick={clearCart} className="button primary active">
              Очистить корзину
            </button>
          </>
        ) : (
          <div>Ваша корзина пуста</div>
        )}
      </div>
    </div>
  );
}
