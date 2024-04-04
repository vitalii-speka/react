import { useState } from "react";

import { useUser } from "../UserProvider/UserProvider";

const UserMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("🚀 ~ UserMenu ~ name:", name);
    // const { name} = state;

    // this.props.onSubmit({ ...this.state }); //- don't work!!!!
    // this.reset();
  };

  const handleChange = (e) => {
    console.log("🚀 ~ handleChange ~ e:", e.currentTarget.value);
    setName(e.currentTarget.value);
    //   const { name, value, type, checked } = evt.target;
    //   this.setState({ [name]: type === "checkbox" ? checked : value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            //   onChange={() => handleChange(console.log('ddd'))}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Name {name}</button>
      </form>

      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};

export default UserMenu;
