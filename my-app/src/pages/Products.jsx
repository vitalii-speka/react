import ProductList from "../components/ProductList";
import { getProducts } from "../data/fakeAPI";

const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default Products;
