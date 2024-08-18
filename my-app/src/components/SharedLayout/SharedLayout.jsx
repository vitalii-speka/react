import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { useAuth } from "../../hooks";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { logOutButton } from "../../redux/auth/operations";
// import { logOutBut } from "../../redux/auth/slice"; // two options works

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const logOutHandle = e => {
    e.preventDefault();
    // dispatch(logOutBut("logOutButton"));
    dispatch(logOutButton("logOutButton"));
  };

  console.log("🚀 ~ SharedLayout ~ isLoggedIn:", isLoggedIn);
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          React testing
        </Logo>
        <h1>Hello React</h1>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/register">Regiser</Link>
              </li>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/components-page">Components</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/redux-page">Redux page</Link>
              </li>
              {/* <li></li> */}
              <Button type="submit" onClick={logOutHandle}>
                LogOut
              </Button>
            </>
          )}
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page (SharedLayout) ...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
