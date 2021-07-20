import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initApplicationsAC } from '../../utils/redux/actionCreators';
import Application from '../Application/Application';

export default function AdminApplicationList() {
    const applicationList = useSelector((state) => state.adminReducer.applications);
    const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch('http://localhost:4000/admin/applications')
  //     .then(response => response.json())
  //     .then(applications => dispatch(initApplicationsAC(applications.applications)))
  // }, [dispatch])
//   console.log(applicationList);
  return (
    <div>
      {applicationList.map(el => (<Application
        key={el.regnumber}
        el={el}
      />))}
    </div>
  );
}
