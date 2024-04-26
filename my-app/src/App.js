import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComponentsPage from "./pages/ComponentsPage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import SharedLayout from "./components/SharedLayout";
import SignUpForm from "./components/SignUpForm";
import Product from "./components/Product";
import BookList from "./components/BookList";
import UserMenu from "./components/UserMenu/UserMenu";

import favouriteBooks from "./data/booksList";

/* 
! descriptoin
? Product - Компоненти 
? BookList - Рендер за умовою 
? Alert - Вбудовані стилі
TODO exp 

*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/components-page" element={<ComponentsPage />}>
            <Route path="sing-up-form" element={<SignUpForm />} />
            <Route
              path="product"
              element={
                <Product
                  imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
                  name="Tacos With Lime"
                  price={10.99}
                />
              }
            />
            <Route
              path="bookList"
              element={<BookList books={favouriteBooks} />}
            />
            <Route path="usermenu" element={<UserMenu name={"Vitalii"} />} />
            <Route />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
