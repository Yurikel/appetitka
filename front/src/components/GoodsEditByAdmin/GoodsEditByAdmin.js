import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { deleteFromApplicationAC } from '../../utils/redux/actionCreators';

export default function GoodsEditByAdmin({ el, regnumber}) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const handlerDeleteFromApplication = ()=>{
        dispatch(deleteFromApplicationAC({regnumber: id, goodTitle:el.title}))
    }
    return (
        <>
            <h2>{el.title}</h2>
            <input type="text" value={el.value}/>
              <button className="button primary plusminus middlebutton">-</button>
              <button className="button primary plusminus"> +</button>
            <button onClick={handlerDeleteFromApplication} className="adddeletebutton">Удалить из заявки</button>
        </>
    )
}
