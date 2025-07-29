import React, { useContext } from "react";
import usercontext from "./data";
export default function Context() {
  return (
    <>
      <h1>Context</h1>
      <Middle />
    </>
  )
}
function Middle() {
  return (
    <>
      <h1>Middle</h1>
      <SecondMiddle />
    </>
  )
}
function SecondMiddle() {
  return (
    <>
      <h1>SecondMiddle</h1>
      <Last />
    </>
  )
}
function Last() {
  let data = useContext(usercontext)
  return (
    <>
      <h1>{data}</h1>
    </>
  )
}