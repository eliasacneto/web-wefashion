import "./ButtonYellow.scss";

const ButtonYellow = ({ link, children }) => {
  return <button className="ButtonYellow"><a href={link}>{children}</a></button>;
};

export default ButtonYellow;