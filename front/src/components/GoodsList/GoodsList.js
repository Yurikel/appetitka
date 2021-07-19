import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGoodsAC } from "../../utils/redux/actionCreators";
import Good from "../Good/Good";

export default function GoodsList() {
  const goodsState = useSelector((state) => state.goodsReducer.goods);
  const dispatch = useDispatch();
  const goodsSearchField = useRef();

  const [goodsListToDisplay, setGoodsListToDisplay] = useState(false);

  const handleSeachGoods = () => {
    setGoodsListToDisplay(
      goodsState.filter((good) =>
        good.title.includes(goodsSearchField.current.value)
      )
    );
  };

  useEffect(() => {
    fetch("http://localhost:4000/agent/goods")
      .then((res) => res.json())
      .then((data) => dispatch(initGoodsAC(data)));
  }, [dispatch]);

  return (
    <>
      <div className="searchfield">
        <input
          type="search"
          autocomplete="off"
          ref={goodsSearchField}
          id="query"
          placeholder="поиск товара по названию..."
          onChange={handleSeachGoods}
        />
      </div>
      <div className="goodslist">
        {goodsListToDisplay
          ? goodsListToDisplay.map((el) => <Good key={el.title} el={el} />)
          : goodsState.map((el) => <Good key={el.title} el={el} />)}
      </div>
    </>
  );
}
