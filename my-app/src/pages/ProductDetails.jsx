import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProductById } from "../data/fakeAPI";
import BackLink from "../components/BackLink";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/products";

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ location:", location);
    // Analytics.send(location);
  }, [location]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
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
