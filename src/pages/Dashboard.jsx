import { useEffect, useRef, useState } from "react";
import AddProducts from "../components/AddProducts";
import ChangeProduct from "../components/ChangeProduct";

const Dashboard = () => {

  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [change, setChange] = useState(false)
  const [animalToChange, setAnimalToChange] = useState({})
  const selectRef = useRef()

  useEffect(() => {
    fetch("http://localhost:6969/api/products")
    .then(response => response.json())
    .then(data => {
      setAllProducts(data)
      // console.log(data)
      // console.log(allProducts)
      setIsLoading(false)
    })
  }, [])

  const editAnimal = async () => {
    console.log(typeof selectRef.current.value)
    // const animal = allProducts.filter(product => product._id === selectRef.current.value)[0]
    await fetch("http://localhost:6969/api/animal/" + selectRef.current.value)
    .then(response => response.json())
    .then(data => {
      setAnimalToChange(data)
      console.log(data)
      setChange(prev => !prev)
    })
    // console.log(animalData)
    // setAnimalToChange(animalData)
    // setChange(true)
  }

  if (isLoading) {
    // console.log("nein")
    return
  }

  // if (!isLoading) {
  //   console.log("ja")
  //   console.log(allProducts[0].title)
  // }

  return ( 
    <>
    <h1>Only for Admins!</h1>
    <h2>Wenn du kein Admin bist, sei so freundlich und logge dich wieder aus.</h2>
    <div>
      {/* <p>{allProducts[0].title}</p> */}
      <select ref={selectRef}>
        <option value="">Select Animal to change</option>
        {
          allProducts.map(product => <option key={product._id} value={product._id}>{product.title}</option>)
        }
      </select>
      <button onClick={editAnimal}>Select to change</button>
    </div>
    {change && 
    <ChangeProduct animal={animalToChange}/>
    }
    <AddProducts/>
    </>
  );
}

export default Dashboard;