import React from 'react'

const Form = (props) => {
  const { onChange, submit } = props;
  const { username, email, password, checked } = props.values;

  const onChange = (e) => {
    const {name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    change(name, newValue);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  }

  return (
    <div>
      <h1>My Cool Form </h1>
      <form onSubmit={onSubmit} >
        <lable>Name:
          <input 
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          />
        </lable>
        <lable>E-mail:
          <input 
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          />
        </lable>
        <lable>Password:
          <input 
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          />
        </lable>
        <lable>Terms of Service:
          <input 
          type="checkbox"
          name="tos"
          checked={checked}
          onChange={onChange}
          />
        </lable>
          <input type='submit' value='Create a Friend!' />
      </form>
    </div>
  )
}

export default Form
