import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addGoodsToCartAC } from '../../utils/redux/actionCreators';

export default function Good({el}) {
    const{value, setValue} = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {

    },[value])

    function sendState (event){
        dispatch(addGoodsToCartAC({title: el.title, value:event.target.value}))
    }
    return (
        <div style={{display:"flex"}}>
            hfhgf
            <h2>{el.title}</h2>
            <p>{el.price}</p>
            <button onClick={setValue(value--)}>-</button>
            <input onChange={sendState} value={value} />
            <button onClick={setValue(value++)}>+</button>
        </div>
    )
}
