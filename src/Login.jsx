// import React, { useState } from "react";
// function components({onlogin}){
//     const [name,setname]=useState("")
//     const [password,setpassword]=useState("")
   
   
   
   
//     const formSubmit=()=>{
//     onlogin(name,password)
//     }
//  const nameChange=(e)=>{
//     setname(e.target.value)
//  }

//  const passwordChange=(e)=>{
//     setpassword(e.target.value)
//  }

//     return(<form onSubmit={formSubmit}>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={nameChange}/>
//         <p>name: {name}</p>

//        <lable>Password:</lable>
//         <input type="text" value={password} onChange={passwordChange} />
//         <p>quantity: {password}</p>
//         <button>submit</button>
//     </form>

//     )
// }
// export default components
import React, { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onLogin(name, password);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={formSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={nameChange} />
      <p>Name: {name}</p>

      <label>Password:</label>
      <input type="password" value={password} onChange={passwordChange} />
      <p>Password: {password}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
