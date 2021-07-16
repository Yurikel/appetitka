import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {initGoodsAC} from "../../utils/redux/actionCreators"
import Good from '../Good/Good';

export default function GoodsList() {
    const goodsState = useSelector(state => state.goodsReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch("http://localhost:4000/agent/goods")
        .then(res => res.json())
        .then(data => console.log(data.goods))
        // .then(data => dispatch(initGoodsAC(data.goods)))
    }, [])
    console.log(goodsState);
    return (
        <div>
            dsdsada
           {goodsState.goods.map(el => <Good key={el.name} el={el} />)}
        </div>
    )
}
