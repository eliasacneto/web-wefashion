import { Link, useRouteError } from "react-router-dom";
import "./Error404.scss";


export default function Error404() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-section">
      <h1 className="error-title"> 🫣 Oops! </h1>
      <p className="error-subtitle">Parece que a página que você está buscando ainda não foi criada...</p>
      <Link to={`/`}><button className='error-btn'>Volte para o início</button></Link>

    </div>
  );
}