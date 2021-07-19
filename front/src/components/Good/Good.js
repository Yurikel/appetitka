import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addGoodsToCartAC,
  delGoodsFromCartAC,
  adjustCartAC,
} from "../../utils/redux/actionCreators";

export default function Good({ el }) {
  const dispatch = useDispatch();
  const goodsNumberInput = useRef();
  const location = useLocation();

  const itemInCart = useSelector((state) =>
    state.agentReducer.cart.find((good) => good.title === el.title)
  );

  const handlerAddToCart = () => {
    dispatch(addGoodsToCartAC({ title: el.title, value: 1,  good:el._id}));
  };

  const handlerDeleteFromCart = () => {
    dispatch(delGoodsFromCartAC(el.title));
  };

  const handlerMinus = () => {
    if (+goodsNumberInput.current.value === 1) {
      dispatch(delGoodsFromCartAC(el.title));
    } else {
      dispatch(
        adjustCartAC({
          title: el.title,
          value: +goodsNumberInput.current.value - 1,
        })
      );
    }
  };
  const handlerPlus = () => {
    dispatch(
      adjustCartAC({
        title: el.title,
        value: +goodsNumberInput.current.value + 1,
      })
    );
  };
  const handlerChange = () => {
    goodsNumberInput.current.value = goodsNumberInput.current.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1");
    if (+goodsNumberInput.current.value === 0) {
      dispatch(delGoodsFromCartAC(el.title));
    } else {
      dispatch(
        adjustCartAC({ title: el.title, value: goodsNumberInput.current.value, good:el._id})
      );
    }
  };

  return (
    <div className="goodsbox">
      <div>
        <h5>{el.title}</h5>
        <span>Цена: ₽{el.price || itemInCart.price}</span>
      </div>
      <div className="goodsboximage"></div>
      <div>
        <div className="inline">
          {itemInCart ? (
            <>
              <button
                onClick={handlerMinus}
                className="button primary plusminus"
              >
                -
              </button>
              <input
                onChange={handlerChange}
                type="text"
                value={itemInCart.value}
                ref={goodsNumberInput}
              />
              <button
                onClick={handlerPlus}
                className="button primary plusminus"
              >
                +
              </button>
            </>
          ) : (
            <button onClick={handlerAddToCart} className="adddeletebutton">
              Добавить в корзину
            </button>
          )}
        </div>
        {location.pathname === "/cart" && (
          <div>
            <button onClick={handlerDeleteFromCart} className="adddeletebutton">
              Удалить из корзины
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
