import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
  console.log(product)
  return ( 
    <Link to={`/product/${product._id}`}>
    <article>
    <p>{product.title}</p>
    <img src={product.img_url} alt={product.description} />
    </article>
    </Link>
  );
}

export default ProductItem;