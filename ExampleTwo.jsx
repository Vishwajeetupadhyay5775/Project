import React, { useState } from 'react'

function ExampleTwo() {
  let msg = "Ducat India";
  const [data, setData] = useState();

  return (
    <>
      <h1>Welcome{data}</h1>
      <button onClick={()=>setData("Ducat India")}>SignUp</button>
      <button onClick={()=>setData("Vishwajeet")}>Login</button>

    </>
  )
}

export default ExampleTwo