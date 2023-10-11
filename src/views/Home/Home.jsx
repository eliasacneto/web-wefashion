import './Home.scss';
import ButtonWhite from '../../Components/ButtonWhite/ButtonWhite';
import ButtonYellow from '../../Components/ButtonYellow/ButtonYellow';
import yellowImg from './../../assets/WeFashion-img-yellow.svg';

const Benefits = () => {
    return (
        <div id='Home' className='Home'>
            <div className='Home__Content'>
                <div className='Home__Content--left'>
                    <div className='Home__Content--left__Title'>
                        <h1 className='Home__Content--left__Title--text'>
                            <span className='highlight'>We</span>Fashion, sua jornada de <u className='underlight'>moda</u> começa aqui<span className='highlight'>!</span>
                        </h1>
                    </div>
                    <div className='Home__Content--left__Subtitle'>
                        <p className='Home__Content--left__Subtitle--text'>Afinal, costura é uma expressão de arte que transcende as gerações!</p>
                    </div>
                    <div className='Home__Content--left__Buttons'>
                        <ButtonYellow link="#About">Conheça nossa escola</ButtonYellow>
                        <ButtonWhite link="#Courses">Nossos Cursos</ButtonWhite>
                    </div>
                </div>
                <div className='Home__Content--right'>
                    <img className='Home__Content--right__Image' src={yellowImg} alt='Erro-img' />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
