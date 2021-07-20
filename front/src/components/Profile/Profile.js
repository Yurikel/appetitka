import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ApplicationProfile from '../ApplicationProfile/ApplicationProfile';

export default function Profile() {
  const company = localStorage.getItem("title");
  const itn = localStorage.getItem("itn");


  const applicationsState = useSelector(state => state.agentReducer.applications.applications);

  return (
    <div>
      <b>Компания:</b> {company}<br />
      <b>ИНН:</b> {itn}
      {applicationsState ?
        applicationsState.map(el => <ApplicationProfile key={el._id} el={el} />) : 'заявок нет'}
    </div>
  );
}

