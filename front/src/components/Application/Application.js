import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
export default function Application({el}) {
    const agents = useSelector(state => state.adminReducer.agents)
    const buyer = agents.filter(agent => agent._id === el.buyer)[0]
    const date = new Date(el.date)

    return (
        <div style={{marginBottom: "100px"}}>
            <p>Регистрационный номер: {el.regnumber}</p><p>{buyer.title}</p>
            <p>{`Дата: ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</p>
            <p>{el.isready}</p>
            {el.isready === "В обработке" ? <Link to={`/admin/application/${el.regnumber}`} ><button>Просмотр заявки</button></Link>: null}
        </div>
    )
}
