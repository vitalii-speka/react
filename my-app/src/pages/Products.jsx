import { useSearchParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import SearchBox from "../components/SearchBox";
import { getProducts } from "../data/fakeAPI";

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("🚀 ~ Products ~ searchParams:", searchParams)
  const productName = searchParams.get("name") ?? "";
  console.log("🚀 ~ Products ~ productName:", productName)

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;

/* before
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
*/
