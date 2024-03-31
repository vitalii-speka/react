import "./Alert.css";

  /* 

* простий код
    const Alert = ({ variant, outlined, elevated, children }) => {
    const classNames = ["alert", variant];
    if (outlined) classNames.push("is-outlined");
    if (elevated) classNames.push("is-elevated");

    return <p className={classNames.join(" ")}>{children}</p>;
};
*/
/* 
! з бібліотекою clsx
*/
import clsx from "clsx";

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <button
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </button>
  );
};

export default Alert;
