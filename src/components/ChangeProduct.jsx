const ChangeProduct = ({animal}) => {
  const change = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.set("id", animal._id)
    formData.set("public_id", animal.public_id)
    formData.set("img_url", animal.img_url)
    fetch("http://localhost:6969/api/products", {
      method: "PUT",
      body: formData
    })
    console.log("neues update gefeuert", formData)
    // console.log(animal)
  }

  const deleteProduct = async () => {
    console.log(animal._id)
    const response = await fetch(`http://localhost:6969/api/products/${animal._id}`, {
      method: "DELETE"
    })
  }
  return ( 
    <section>
      <p>Change a Product:</p>
      <form onSubmit={change}>
      <div>
        <label htmlFor="title">title:</label>
        <input type="text" name="title" defaultValue={animal.title}/>
      </div>
      <div>
        <label htmlFor="category">category:</label>
        <input type="text" name="category" defaultValue={animal.category} />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <input type="text" name="description" defaultValue={animal.description} />
      </div>
      <div>
        <label htmlFor="price">price:</label>
        <input type="number" name="price"  defaultValue={animal.price}/>
      </div>
      <div>
        <label htmlFor="stock">stock:</label>
        <input type="number" name="stock"  defaultValue={animal.stock}/>
      </div>
      <div>
          <label htmlFor="bild">Artiklebild: </label>
          <input type="file" name="bild" id="" />
        </div>
      <button type="submit">Save changes</button>
      </form>
      <button onClick={deleteProduct}>Delete</button>
    </section>
  );
}

export default ChangeProduct;