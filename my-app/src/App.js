// import LogoReact from "./components/LogoReact/LogoReact";
// import Product from "./components/Product";
// import BookList from "./components/BookList";
// import favouriteBooks from "./data/booksList";
// import Alert from "./components/Alert";
// import Counter from "./components/Counter";
import SignUpForm from "./components/SignUpForm";
// import Api from "./API/axios";
// import UserMenu from "./components/UserMenu/UserMenu";
// import UseRef from "./components/UseRef";
// import Player from "./components/Player";

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
      {/* <UseRef /> */}
      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}
      {/* <UserMenu name={"Vitalii"} /> */}
      {/* <Api /> */}
      {/* <Counter /> */}
      <SignUpForm />
      {/* <>
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
      </> */}
      {/* <BookList books={favouriteBooks} /> */}
      {/* <LogoReact /> */}
      {/* <>
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
      </> */}
    </>
  );
}

export default App;
