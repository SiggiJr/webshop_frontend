import { useRef } from "react";

const AddProducts = () => {

  const titleRef = useRef()
  const categoryRef = useRef()
  const descriptionRef = useRef()
  const priceRef = useRef()
  const stockRef = useRef()
  const imgRef = useRef()

  const addProduct = async (event) => {
    event.preventDefault()

    // const request = {
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   description: descriptionRef.current.value,
    //   price: priceRef.current.value,
    //   stock: stockRef.current.value,
    //   img_url: imgRef.current.value
    // }
    await fetch("http://localhost:6969/api/products", {
      method: "POST",
      body: new FormData(event.target)
    })
  }
  return ( 
    <section>
      <p>Add a Product:</p>
      <form onSubmit={addProduct}>
        <div>
          <label htmlFor="title">title:</label>
          <input type="text" name="title" placeholder="Add title here" />
        </div>
        <div>
          <label htmlFor="category">category:</label>
          <input type="text" name="category" placeholder="Add category here" />
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <input type="text" name="description" placeholder="Add description here" />
        </div>
        <div>
          <label htmlFor="price">price:</label>
          <input type="number" name="price" placeholder="Add price here" />
        </div>
        <div>
          <label htmlFor="stock">stock:</label>
          <input type="number" name="stock" placeholder="Add stock here" />
        </div>
        <div>
          <label htmlFor="bild">Artiklebild: </label>
          <input type="file" name="bild" id="" />
        </div>
        <button>Add</button>
      </form>
    </section>
  );
}

export default AddProducts;