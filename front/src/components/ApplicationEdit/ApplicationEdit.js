import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import GoodsEditByAdmin from '../GoodsEditByAdmin/GoodsEditByAdmin'; 
export default function ApplicationEdit() {
    const {id} = useParams();
    const applications = useSelector(state => state.adminReducer.applications)
    const application = applications.find(el => el.regnumber==id)
    const aplicationGoods = application.goods
    const goods = useSelector((state) => state.adminReducer.goodsList)
    // console.log(goods);
    let result = [];
    aplicationGoods.forEach(el => {
        let preresult = goods.find(good => good._id == el["good"])
        result.push({...preresult, value: el["value"]})
    })
    // console.log(result);
    return (
        <div>
           {result.map(el => <GoodsEditByAdmin key={el.title} el={el} />)}
        </div>
    )
}
