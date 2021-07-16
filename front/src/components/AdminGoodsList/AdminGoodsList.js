import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestGoodsAC } from '../../utils/redux/actionCreators';

function AdminGoodsList() {

  const goodsList = useSelector((state) => state.adminReducer.goodsList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:4000/admin/goodslist')
      .then(response => response.json())
      .then(goods => dispatch(requestGoodsAC(goods)))
  }, [dispatch])

  return (
    <div>
      
      {goodsList ? goodsList[0].title : null}
      
    </div>
  );
}

export default AdminGoodsList;
