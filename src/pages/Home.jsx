import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

const Home = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:6969/api/products")
    .then(response => response.json())
    .then(data => {
      setItems(data)
      setIsLoading(false)
      console.log(data)
    })
  }, [])

  if (isLoading) {
    return
  }

  return ( 
    <>
    <h1>This is the Home of my Webshop</h1>
    {items.map(item => <ProductItem key={item._id} product={item}/>)}
    </>
  );
}

export default Home;