import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initAgentApplicationsAC } from '../../utils/redux/actionCreators';

export default function Profile() {
  const company = localStorage.getItem("title");
  const itn = localStorage.getItem("itn");

  const agentState = useSelector(state => state.agentReducer.currentUser)
  const applicationsState = useSelector(state => state.agentReducer.applications.applications)

  console.log(applicationsState);

  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`http://localhost:4000/agent/profile/${agentState}`)
    .then(res => res.json())
    .then(data => dispatch(initAgentApplicationsAC(data)))
  },[dispatch])

  return (
    <div>
      <b>Компания:</b> {company}<br/>
      <b>ИНН:</b> {itn}
      {applicationsState.map(el => <div>123</div>)}
    </div>
  )
}

