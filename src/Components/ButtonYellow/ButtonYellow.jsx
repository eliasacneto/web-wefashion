import "./ButtonYellow.scss";

export const ButtonYellow = ({ link, children }) => {
  return <button className="ButtonYellow"><a href={link}>{children}</a></button>;
};
