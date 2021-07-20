import React from 'react'
import { Redirect, useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import GoodsEditByAdmin from '../GoodsEditByAdmin/GoodsEditByAdmin'; 
import { deleteApplicationAC } from '../../utils/redux/actionCreators';
export default function ApplicationEdit() {
    const {id} = useParams();
    const applications = useSelector(state => state.adminReducer.applications)
    const application = applications.find(el => el.regnumber==id)
    const aplicationGoods = application.goods
    const goods = useSelector((state) => state.adminReducer.goodsList)
    let result = [];
    aplicationGoods.forEach(el => {
        let preresult = goods.find(good => good._id == el["good"])
        result.push({...preresult, value: el["value"]})
    })
    // const dispatch = useDispatch();
    console.log("aaa", aplicationGoods);
    const handlerDeleteApp = ()=>{
        fetch(`http://localhost:4000/admin/application/${id}`, {method:"delete"})
    }
    const handlerSubmitApp = ()=>{
        fetch(`http://localhost:4000/admin/application/${id}`, {
            method:"put", 
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({goods:aplicationGoods})
        })
    }
    return (
        <div>
           {result.map(el => <GoodsEditByAdmin key={el.title} el={el} />)}
           <Link to="/admin/applicationlist"><button onClick = {handlerDeleteApp}>Удалить заявку</button></Link>
           <Link to="/admin/applicationlist"><button onClick = {handlerSubmitApp}>Подвердить заявку</button></Link>
        </div>
    )
}
