import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import SignUpForm from "./components/SignUpForm";
import Item from "./components/Item";
import BookList from "./components/BookList";
import UserMenu from "./components/UserMenu/UserMenu";

import favouriteBooks from "./data/booksList";

const Home = lazy(() => import("./pages/Home"));
const ComponentsPage = lazy(() => import("./pages/ComponentsPage"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const ReduxPage = lazy(() => import("./pages/ReduxPage"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

/* import befor lazy()
import Home from "./pages/Home";
import ComponentsPage from "./pages/ComponentsPage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
*/

/*  notificatiom
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
              path="item"
              element={
                <Item
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
          <Route path="redux-page" element={<ReduxPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
