// import React, { useState } from 'react'
// import Login from './Login'
// import UserWelcome from './UserWelcome'
// import AdminWelcome from './AdminWelcome'
// import Errormessge from './Errormessge'

// function App() {
//   const [isLogin,setLogin]=useState()
 
//   const [isAdminWelcome,setAdminWelcome ]=useState(false);
//   const [isErrormessge,setErrormessge]=useState(false);

//   const  onlogin =(name,password)=>
//     { if(name==="admin" && password==="admin")
//       {setAdminWelcome(true);
//        setLogin(false);
//        setErrormessgeisErrormessge(false);
//        } 
//       else if(name==="user" && password==="user"){
//         setLogin(true)
//         setAdminWelcome(false)
//         setErrormessge(false)
   
//   }
//   else{setErrormessge(true)}
    
//   };
//   const haundlogot=()=>{
//     setLogin(false);
//     setAdminWelcome(false);
//     setErrormessge(false)

//   }

//   return (
//     <div>
//       {isLogin && isAdminWelcome &&(<div>
//         <AdminWelcome/>
//     <button onClick={haundlogot}></button>
//       </div>
//     )}
//       {isLogin && !isAdminWelcome &&(<div>
//         <UserWelcome/>
//     <button onClick={haundlogot}></button>
//       </div>
//     )}
//       {isErrormessge && <Errormessge/> &&(<div>
//         <Errormessge/>
//     <button onClick={haundlogot}></button>
//       </div>
//     )}
//       </div>
    
//   )
// }
// export default App

import React, { useState } from 'react';
import Login from './Login';
import UserWelcome from './UserWelcome';
import AdminWelcome from './AdminWelcome';
import ErrorMessage from './ErrorMessage';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isAdminWelcome, setAdminWelcome] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(false);

  const onLogin = (name, password) => {
    if (name === 'admin' && password === 'admin') {
      setAdminWelcome(true);
      setLogin(true);
      setErrorMessage(false);
    } else if (name === 'user' && password === 'user') {
      setLogin(true);
      setAdminWelcome(false);
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  const handleLogout = () => {
    setLogin(false);
    setAdminWelcome(false);
    setErrorMessage(false);
  };

  const tryagain=()=>{setErrorMessage(false)}
  return (
    <div>
      {!isLogin && !isErrorMessage && <Login onLogin={onLogin} />}
      {isLogin && isAdminWelcome && (
        <div>
          <AdminWelcome />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {isLogin && !isAdminWelcome && (
        <div>
          <UserWelcome />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {isErrorMessage && (
        <div>
          <ErrorMessage />
          <button onClick={tryagain}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
