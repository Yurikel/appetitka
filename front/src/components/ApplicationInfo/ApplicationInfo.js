import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AdminApplicationView from '../AdminApplicationView/AdminApplicationView'
import { Link } from 'react-router-dom';
import { initAgentsAC, initApplicationsAC, requestGoodsAC } from '../../utils/redux/actionCreators';

export default function ApplicationInfo() {
    const {id} = useParams();
    const applications = useSelector((state) => state.adminReducer.applications);
    const application = applications.filter(el => el.regnumber==id)[0]
    let aplicationGoods;
    let result = [];
    const goods = useSelector((state) => state.adminReducer.goodsList)
    if (application){
        aplicationGoods = application.goods
        aplicationGoods.forEach(el => {
            let preresult = goods.find(good => good._id == el["good"])
            result.push({...preresult, value: el["value"]})
        })
    }
    let total = result.reduce((acc, el)=>{
        return acc + el.price*el.value}, 0)
    const submitApplication = ()=>{
        fetch(`http://localhost:4000/admin/application/${id}`, {method:"put"})
        .then(res => res.json())
        .then(message => alert(message.message))
    }
    return (
        <>
        {application ? <div>
            <h2>Заявка номер {id}</h2>
            <ul>
            {result.map(el => <li><AdminApplicationView key={el.title} el={el} /></li>)}
            </ul>
            <p>Общая сумма заявки: {total} руб.</p> 
            {application.isready == "Готовится к отгрузке" ? null :<><Link to={`/admin/application/edit/${id}`}><button >Редактировать заявку</button> </Link>
            <Link to="/admin/applicationList"><button onClick={submitApplication}>Одобрить заявку</button></Link></>}
            
        </div> : <p>Nothing to show</p>}
        
        </>
    )
}
