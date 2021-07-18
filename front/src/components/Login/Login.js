import React from "react";

function Login() {
  const handlerSubmit = async (event) => {
    event.preventDefault();

    const itn = event.target.itn.value;
    const password = event.target.password.value;

    const preResult = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ itn, password }),
    });
    const result = await preResult.json();
    if (result.admin) {
      localStorage.setItem("admin", result.admin);
      document.location.href = "/";
    } else if (result.message) {
      alert(result.message);
    } else {
      localStorage.setItem("itn", result.itn);
      localStorage.setItem("title", result.title);
      document.location.href = "/goods";
    }
  };

  const digitsFilter = (event) => {
    event.target.value = event.target.value
      .replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
  };

  return (
    <div className="inputform">
      <form onSubmit={handlerSubmit}>
        <div>
          <label>ИНН:</label>
          <input
            type="text"
            name="itn"
            className="expandedinput"
            c
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input type="password" name="password" className="expandedinput" />
        </div>
        <div>
          <input type="submit" value="Зарегистрировать" />
        </div>
      </form>
    </div>
  );
}

export default Login;
