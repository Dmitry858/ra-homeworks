'use strict';

const AuthForm = function({onAuth}) {
  function submitHandler(event) {
    event.preventDefault();
    const form = event.target.elements;
    const data = {
      name: form.name.value, 
      email: form.email.value,
      password: form.password.value
    };
    if (onAuth && typeof onAuth === 'function') {
      onAuth(data);
    }
  }
  
  const validator = function(event) {
    if (event.currentTarget.type === 'email') {
      event.currentTarget.value = event.currentTarget.value.replace(/[^\w@.-]/g, '');
    }
    if (event.currentTarget.type === 'password') {
      event.currentTarget.value = event.currentTarget.value.replace(/[^\w]/g, '');
    }
  }
  
  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={submitHandler}>
      <div className="Input">
        <input required type="text" name="name" placeholder="Имя" />
        <label></label>
      </div>
      <div className="Input">
        <input type="email" name="email" placeholder="Электронная почта" onChange={validator} />
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" name="password" placeholder="Пароль" onChange={validator} />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}