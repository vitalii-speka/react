import { ProductList } from "../components/ProductList/ProductList";
import { getProducts } from "../data/fakeAPI";

export const Products = () => {
  const products = getProducts();
  console.log("🚀 ~ Products ~ products:", products);
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

// export default Products;
