import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = () => {

  const navigator = useNavigate()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch("http://localhost:6969/api/admin/check", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      if (!response.ok) {
        console.log("nix gut")
        navigator("/")
      } else {
        setAuth(true)
      }
    }
    checkToken()
  }, [])

  return ( 
    <>
    {
      auth && <Outlet/>
    }
    </>
  );
}

export default Protected;