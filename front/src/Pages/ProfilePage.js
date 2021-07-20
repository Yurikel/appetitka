import React from 'react'
import ApplicationList from '../components/ApplicationList/ApplicationList';
import Profile from '../components/Profile/Profile';

export default function ProfilePage() {
  // useEffect(() => {
  //   fetch('http://localhost:4000/profile')
  //   .then(res => res.json())
  //   .then(data => )
  // })
  return (
    <div>
      <Profile/>
      <ApplicationList/>
    </div>
  )
}
