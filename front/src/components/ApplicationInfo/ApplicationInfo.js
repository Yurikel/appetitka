import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AdminApplicationView from '../AdminApplicationView/AdminApplicationView'

export default function ApplicationInfo() {
    const {id} = useParams();
    const applications = useSelector((state) => state.adminReducer.applications);
    const application = applications.filter(el => el.regnumber==id)[0]
    const aplicationGoods = application.goods
    const goods = useSelector((state) => state.adminReducer.goodsList)
    // console.log(goods);
    let result = [];
    aplicationGoods.forEach(el => {
        console.log(el["good"]);
        let preresult = goods.find(good => good._id == el["good"])
        
        result.push({...preresult, value: el["value"]})
    })
    return (
        <div>
            <ul>
            <li>{result.map(el => <AdminApplicationView key={el.title} el={el} />)}</li>
            </ul>
            <button>Редактировать заявку</button>
        </div>
    )
}
