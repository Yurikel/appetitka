import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AdminApplicationView from '../AdminApplicationView/AdminApplicationView'
import { Link } from 'react-router-dom';

export default function ApplicationInfo() {
    const {id} = useParams();
    const applications = useSelector((state) => state.adminReducer.applications);
    const application = applications.filter(el => el.regnumber==id)[0]
    console.log(application);
    const aplicationGoods = application.goods
    const goods = useSelector((state) => state.adminReducer.goodsList)
    // console.log(goods);
    let result = [];
    aplicationGoods.forEach(el => {
        let preresult = goods.find(good => good._id == el["good"])
        result.push({...preresult, value: el["value"]})
    })
    let total = result.reduce((acc, el)=>{
        return acc + el.price*el.value}, 0)
    const submitApplication = ()=>{
        fetch(`http://localhost:4000/admin/application/${id}`, {method:"put"})
        .then(res => res.json())
        .then(message => alert(message.message))
    }

    return (
        <div>
            <h2>Заявка номер {id}</h2>
            <ul>
            {result.map(el => <li><AdminApplicationView key={el.title} el={el} /></li>)}
            </ul>
            <p>Общая сумма заявки: {total} руб.</p> 
            <Link to={`/admin/application/edit/${id}`}><button >Редактировать заявку</button> </Link>
            <Link to="/admin/applicationList"><button onClick={submitApplication}>Одобрить заявку</button></Link>
        </div>
    )
}
