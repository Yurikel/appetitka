import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
export default function Application({el}) {
    

      const agents = useSelector(state => state.adminReducer.agents)
      let buyer = agents.find(agent => agent._id === el.buyer);
  
    const date = new Date(el.date)

    return (
        <>
        { buyer ? <div style={{marginBottom: "100px"}}>
            <p>Регистрационный номер: {el.regnumber}</p>
            <p>{buyer.title}</p>
            <p>{`Дата: ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</p>
            <p>{el.isready}</p>
            <Link to={`/admin/application/${el.regnumber}`} ><button>Просмотр заявки</button></Link>
        </div> : <p>Nothing to show</p>}

        </>
    )
}
