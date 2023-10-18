import React from "react";
import Post01 from "./../../assets/images/costura01.jpg"
import Post02 from "./../../assets/images/costura02.jpg"
import './Posts.scss'

const Posts = () => {
  return (
    <div id="Posts" className='Posts'>
      <div className='Posts__Left'>
        <div className="Posts__Left__Content">
          <h1 className="Posts__Left__Content--title">✊🏼 Seja parte da <u className="underlight-small">Revolução</u> da Moda na <span className="we"><span className="highlight">We</span>Fashion</span><span className="highlight">!</span></h1>
          <p className="Posts__Left__Content--subtitle">Na WeFashion, estamos redefinindo o mundo da moda e costura. Não importa sua idade, <b className="highlight">nunca é tarde</b> para embarcar em uma <b>jornada criativa</b> e descobrir o mundo emocionante da costura e modelagem. Afinal, costura <b className="highlight del">não é coisa de velho</b> - é uma expressão de arte que transcende as gerações!</p>

        </div>
        <div className="Posts__Left--imgContainer">
          <img className="Posts__Left--img" src={Post01} alt="post01" loading="lazy" />
        </div>
      </div>
      <div className='Posts__Right'>
        <div className="Posts__Right--imgContainer">
          <img className="Posts__Right--img" src={Post02} alt="post02" loading="lazy" />
        </div>
        <div className="Posts__Right__Content">
          <h1 className="Posts__Right__Content--title"> 🪡 Descubra o seu estilo <u className="underlight-small">único</u><span className="highlight">!</span></h1>
          <p className="Posts__Right__Content--subtitle">Na WeFashion, valorizamos a <b><span className="highlight-y">diversidade 🏳️‍🌈</span></b> e acreditamos que a moda <b>deve ser acessível a todos</b>. </p>
          <p className="Posts__Right__Content--subtitle"> Nossos cursos de moda são <b>projetados para atender a todos</b> os tipos de corpos e estilos. </p> <p className="Posts__Right__Content--subtitle"> Quer você seja apaixonado por design, sonhe em criar suas próprias roupas sob medida ou deseje personalizar seu guarda-roupa, nossos cursos são feitos sob medida para você.</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
