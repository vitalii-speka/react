import { useParams } from "react-router-dom";
import { getProductById } from "../data/fakeAPI";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  return (
    <main>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - id: {id}
        </h2>
        <p>Deskription one of Product</p>
      </div>
    </main>
  );
};

export default ProductDetails;
