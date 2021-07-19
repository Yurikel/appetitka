import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Good from "../Good/Good";
import { clearCartAC } from "../../utils/redux/actionCreators";

export default function CartGoodsList() {
  let cart = useSelector((state) => state.agentReducer.cart);
  let goods = useSelector((state) => state.goodsReducer.goods);
  const dispatch = useDispatch();

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
  // console.log(cart);
  // cart.sort((prev, next) => prev.value - next.value ? 1 : -1)
  // console.log(cart);
  return (
    <>
      <div className="confirmresetbuttons">
        {cart.length ? (
          <>
            {" "}
            <button onClick={makeApplication} className="button primary">
              Сформировать заявку
            </button>
            <button onClick={clearCart} className="button primary active">
              Отчистить корзину
            </button>{" "}
          </>
        ) : (
          <div>Ваша корзина пуста</div>
        )}
      </div>
      <div className="goodslist">
        {cart.map((el) => (
          <Good
            key={el.title}
            el={goods.find((good) => good.title === el.title)}
          />
        ))}
      </div>
    </>
  );
}
