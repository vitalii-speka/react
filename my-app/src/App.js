// import LogoReact from "./components/LogoReact/LogoReact";
import Product from "./components/Product/Product";
import BookList from "./components/favoriteBooks/favoriteBooks";
import favouriteBooks from "./data/booksList";
import Alert from "./components/Alert/Alert";
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
      <h1>Hello React</h1>
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        name="Fries and Burger"
        price={14.29}
      />
      <BookList books={favouriteBooks} />
      {/* <LogoReact /> */}
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
}

export default App;
