import './Home.scss';
import ButtonWhite from '../../Components/ButtonWhite/ButtonWhite';
import ButtonYellow from '../../Components/ButtonYellow/ButtonYellow';
import yellowImg from './../../assets/WeFashion-img-yellow.png';
import WeWoman from './../../assets/q.png';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id='home' className='Home'>
            <div className='Home__Content'>
                <div className='Home__Content--left'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <div className='Home__Content--left__Title'>
                            <h1 className='Home__Content--left__Title--text'>
                                <span className='highlight'>We</span>Fashion, sua jornada de <u className='underlight'>moda</u> começa aqui<span className='highlight'>!</span>
                            </h1>
                        </div>
                        <div className='Home__Content--left__Subtitle'>
                            <p className='Home__Content--left__Subtitle--text'>Afinal, costura é uma expressão de arte que transcende as gerações!</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='Home__Content--left__Buttons'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <ButtonYellow link="#courses">Conheça nossos cursos</ButtonYellow>
                        <Link to="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20me%20inscrever%20em%20um%20dos%20cursos.%20%F0%9F%98%8A" target='_blank' className='whats-link'><ButtonWhite>Matricule-se agora</ButtonWhite></Link>

                    </motion.div>
                </div>
                <div className='Home__Content--right'>
                    <img className='Home__Content--right__Image' src={yellowImg} alt='Erro-img' />
                </div>
            </div>
        </div>
    );
};

export default Home;
