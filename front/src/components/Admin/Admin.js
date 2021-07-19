import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { initAgentsAC, requestGoodsAC } from '../../utils/redux/actionCreators';

function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:4000/admin/agents')
      .then(response => response.json())
      .then(agents => dispatch(initAgentsAC(agents.agents)))
      fetch('http://localhost:4000/admin/goodslist')
      .then(response => response.json())
      .then(goods => dispatch(requestGoodsAC(goods.goods)))
  }, [dispatch])
  return (
    <div>
     <div><Link to='/admin/agentReg'>Регистрация нового агента</Link></div> 
     <div><Link to='/admin/goodsList' >Список товаров</Link></div>
      <Link to='/admin/applicationList' >Список заявок</Link>
    </div>
  );
}

export default Admin;
