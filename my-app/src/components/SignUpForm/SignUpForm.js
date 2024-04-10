import { useState } from "react";

export default function SignUpForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "login":
        setLogin(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "agreed":
        setAgreed((state) => !state);
        break;

      default:
        console.log("error");
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('setn form, func "handleSubmit"');

    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    reset();
  };

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
    setAgreed(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          placeholder="Enter login"
          name="login"
          value={login}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <label>
        Agree to terms
        <input
          type="checkbox"
          name="agreed"
          checked={agreed}
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={!agreed}>
        Sign up as {login}
      </button>
    </form>
  );
}

/* 
// import data from "../../API/axios";
// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.


const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
};

class OldSignUpForm extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    // console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
    }
    if (prevProps === this.props) {
      console.log(
        "🚀 ~ SignUpForm ~ componentDidUpdate ~ prevProps:",
        prevProps
      );
    }
  }

  /* 
  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
 

  handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );
    // this.props.onSubmit({ ...this.state }); //- don't work!!!!
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
*/
