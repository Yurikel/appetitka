import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Good from "../Good/Good";
import { clearCartAC } from "../../utils/redux/actionCreators";
import { getCookie } from "react-use-cookie";

export default function CartGoodsList() {
  const dispatch = useDispatch();
  const rightPanelDiv = useRef();

  let user = useSelector((state) => state.agentReducer.currentUser);
  let cart = useSelector((state) => state.agentReducer.cart);
  let goods = useSelector((state) => state.goodsReducer.goods);

  function totalCost() {
    let result = 0;
    cart.forEach((el) => {
      let price = 0;
      for (let i = 0; i < goods.length; i++) {
        if (goods[i].title == el.title) {
          price = +goods[i].price;
        }
      }
      result += price * el.value;
    });
    return result;
  }

  function makeApplication() {
    // console.log(cart);
    fetch(`http://localhost:4000/agent/cart/${user}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goods: cart }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
    dispatch(clearCartAC(""));
  }

  const clearCart = () => {
    dispatch(clearCartAC(""));
  };

  const [divMargin, setDivMargin] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setDivMargin(
        e.target.documentElement.scrollTop - rightPanelDiv.current.offsetTop
      );
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [setDivMargin]);

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
      <div className="confirmblock" ref={rightPanelDiv}>
        <div className={divMargin > 0 && "fixed"}  style={{top: 10}}>
        {cart.length ? (
          <>
            <h4>Ориентировочная стоимость заказа:</h4>
            <div className="sum">₽ {totalCost()}</div>
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
    </div>
  );
}
