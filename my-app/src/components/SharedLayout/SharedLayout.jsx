import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";

const SharedLayout = () => {
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
          <li>
            <Link to="/components-page">Components</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
