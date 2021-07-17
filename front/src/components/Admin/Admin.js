import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
     <div><Link to='/admin/agentReg'>Регистрация нового агента</Link></div> 
      <Link to='/admin/goodsList' >Список товаров</Link>
    </div>
  );
}

export default Admin;
