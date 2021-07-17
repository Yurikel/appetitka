import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {initGoodsAC} from "../../utils/redux/actionCreators"
import Good from '../Good/Good';

export default function GoodsList() {
    const goodsState = useSelector(state => state.goodsReducer.goods);

    const dispatch = useDispatch();
    useEffect(()=>{
        fetch("http://localhost:4000/agent/goods")
        .then(res => res.json())
        .then(data => dispatch(initGoodsAC(data)))
        // .then(data => console.log(data))
    }, [dispatch])
    console.log(goodsState)
    return (
        <div>
           {goodsState.map(el => <Good key={el.title} el={el} />)}
        </div>
    )
}
