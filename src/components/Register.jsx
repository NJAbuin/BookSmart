import React from 'react'

export default function Register(){
    return(
<form action="/auth/register" method="post">
<input type="text" name="name" placeholder="Name" />
  <input type="text" name="email" placeholder="Email" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit">Registrate!</button>
</form>)

}