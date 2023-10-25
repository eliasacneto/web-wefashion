import "./ButtonYellow.scss";

const ButtonYellow = ({ link, children }) => {
  return <a href={link} target="_blank"><button className="ButtonYellow">{children}</button></a>;
};

export default ButtonYellow;