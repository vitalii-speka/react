import { useSearchParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import SearchBox from "../components/SearchBox";
import { getProducts } from "../data/fakeAPI";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  const location = useLocation();

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ location:", location);
    // Analytics.send(location);
  }, [location]);

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
