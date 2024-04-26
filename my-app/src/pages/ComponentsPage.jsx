import { Route, Routes, Link, Outlet } from "react-router-dom";
// import LogoReact from "../components/LogoReact/LogoReact";

// import Alert from "../components/Alert";
// import Counter from "../components/Counter";
// import SignUpForm from "../components/SignUpForm";
// import Api from "./API/axios";

// import UseRef from "../components/UseRef";
// import Player from "../components/Player";

function ComponentsPage() {
  return (
    <>
      <h1>Components Page</h1>

      <ul>
        <li>
          <Link to="sing-up-form">Sign Up Form</Link>
        </li>
        <li>
          <Link to="item">Item</Link>
        </li>
        <li>
          <Link to="bookList">BookList</Link>
        </li>
        <li>
          <Link to="usermenu">User menu</Link>
        </li>
        <Outlet />
      </ul>

      <Routes>
        {/* <Route path="sing-up-form" element={<SignUpForm />} /> */}
        <Route path="mission" element={<h1>Mission</h1>} />
      </Routes>

      {/* <UseRef /> */}
      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}
      {/*  */}
      {/* <Api /> */}
      {/* <Counter /> */}
      {/* <>
        
        
      </> */}
      {/* */}
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

export default ComponentsPage;
