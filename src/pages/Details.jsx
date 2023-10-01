import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const id = useParams().id

  useEffect(() => {
    console.log(id)
    const getData = async () => {
      const response = await fetch(`http://localhost:6969/product/${id}`)
      console.log(response)
    }
    getData()
  })

  return ( 
    <>
    </>
  );
}

export default Details;