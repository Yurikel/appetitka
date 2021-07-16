import React from "react";

function RegNewAgent() {
  const handlerSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const itn = event.target.itn.value;
    const password = event.target.password.value;

    const preResult = await fetch("http://localhost:4000/admin/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ title, itn, password }),
    });
    const result = await preResult.json()
    
    if(result.message) {
      alert(result.message)
    }
    else {
      localStorage.setItem('itn', result.itn)
      localStorage.setItem('title', result.title)
      alert('Новый пользователь зарегистрирован')
    }


  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <div>
          <label>Название организации:</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>ИНН:</label>
          <input type="number" name="itn" />
        </div>
        <div className="mb-3">
          <label>Пароль:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Зарегистрировать" />
        </div>
      </form>
    </div>
  );
}

export default RegNewAgent;
