import React from "react";
import Post01 from "./../../assets/images/costura01.jpg"
import Post02 from "./../../assets/images/costura02.jpg"
import './Posts.scss'

const Posts = () => {
  return (
    <div className='Posts'>
      <div className='post-left'>
        <div className="post-content">
          <h1 className="post-title">✊🏼 Seja parte da <u className="underlight-small">Revolução</u> da Moda na <span className="we"><span className="highlight">We</span>Fashion</span><span className="highlight">!</span></h1>
          <p className="post-subtitle">Na WeFashion, estamos redefinindo o mundo da moda e costura. Não importa sua idade, <b className="highlight">nunca é tarde</b> para embarcar em uma <b>jornada criativa</b> e descobrir o mundo emocionante da costura e modelagem. Afinal, costura <b className="highlight del">não é coisa de velho</b> - é uma expressão de arte que transcende as gerações!</p>

        </div>
        <div>
          <img className="post-img" src={Post01} alt="post01" loading="lazy" />
        </div>
      </div>
      <div className='post-right'>
        <div>
          <img className="post-img-l" src={Post02} alt="post02" loading="lazy" />
        </div>
        <div className="post-content">
          <h1 className="post-title"> 🪡 Descubra o seu estilo <u className="underlight-small">único</u><span className="highlight">!</span></h1>
          <p className="post-subtitle">Na WeFashion, valorizamos a <b><span className="highlight-y">diversidade 🏳️‍🌈</span></b> e acreditamos que a moda <b>deve ser acessível a todos</b>. </p><p p className="post-subtitle"> Nossos cursos de moda são <b>projetados para atender a todos</b> os tipos de corpos e estilos. </p> <p p className="post-subtitle"> Quer você seja apaixonado por design, sonhe em criar suas próprias roupas sob medida ou deseje personalizar seu guarda-roupa, nossos cursos são feitos sob medida para você.</p>

        </div>
      </div>
    </div>
  );
};

export default Posts;
