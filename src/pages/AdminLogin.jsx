import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [err, setErr] = useState(null)
  const emailRef = useRef()
  const passRef = useRef()

  const navigator = useNavigate()

  const login = async () => {
    const response = await fetch("http://localhost:6969/api/admin/login", {
    method: "POST",  
    headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({user: emailRef.current.value, password: passRef.current.value})
    })

    if (response.ok) {
      const token = await response.json();
      console.log(token)
      localStorage.setItem("token", token)
      navigator("/admin/dashboard")
    } else {
      setErr("You are in trouble!")
    }
  }

  return ( 
    <section>
      <div>
        <input ref={emailRef} type="text" />
      </div>
      <div>
        <input ref={passRef} type="password" />
      </div>
      <button onClick={login}>Login</button>
      <div>
        {err && <p>{err}</p>}
      </div>
    </section>
  );
}

export default AdminLogin;