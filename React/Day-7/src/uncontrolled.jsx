import react from 'react';
import { useState } from 'react';
import { useRef } from 'react';
export default function Uncontrolled() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function submit(event) {
    event.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value
    });
  }
  return (
    <>
      <form action="" onSubmit={submit}>
        <input type="email" name="" id="" placeholder='Enter Email' ref={emailRef} />
        <br />
        <input type="password" name="" id="" placeholder='Enter Password' ref={passwordRef} />
        <br />
        <button type='submit'></button>
      </form>
    </>
  )
}