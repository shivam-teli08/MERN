import React from "react";
import { useState } from "react";
export default function Handling() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  function submit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <form action="" onSubmit={submit}>
        <input type="text" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={formData.email} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}