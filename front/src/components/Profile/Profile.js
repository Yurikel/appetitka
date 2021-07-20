import React from 'react'

export default function Profile() {
  const company = localStorage.getItem("title");
  const itn = localStorage.getItem("itn");
  return (
    <div>
      <b>Компания:</b> {company}<br/>
      <b>ИНН:</b> {itn}
    </div>
  )
}

