import React, { useEffect, useState } from 'react'
import "./Nescola.scss"
import Pmodelo1 from "../../assets/Modelos/1.jpg"
import Pmodelo2 from "../../assets/Modelos/2.jpg"
import Pmodelo3 from "../../assets/Modelos/7.jpg"
import Pmodelo4 from "../../assets/Modelos/8.jpg"
import Pmodelo5 from "../../assets/Modelos/9.jpg"
import Pmodelo6 from "../../assets/Modelos/10.jpg"
import Pmodelo7 from "../../assets/Modelos/11.jpg"
import Pmodelo8 from "../../assets/Modelos/12.jpg"
import Pmodelo9 from "../../assets/Modelos/13.jpg"
import Pmodelo10 from "../../assets/Modelos/14.jpg"
import Pmodelo11 from "../../assets/Modelos/15.jpg"
import Pmodelo12 from "../../assets/Modelos/17.jpg"
import Pmodelo13 from "../../assets/Modelos/19.jpg"
import Pmodelo14 from "../../assets/Modelos/20.jpg"
import Pmodelo15 from "../../assets/Modelos/21.jpg"
import Pmodelo16 from "../../assets/Modelos/22.jpg"
import Pmodelo17 from "../../assets/Modelos/23.jpg"
import Pmodelo18 from "../../assets/Modelos/25.jpg"
import Pmodelo19 from "../../assets/Modelos/26.jpg"
import Pmodelo20 from "../../assets/Modelos/27.jpg"

const currentImage = Pmodelo1

const images = [Pmodelo2, Pmodelo3, Pmodelo4, Pmodelo5, Pmodelo6, Pmodelo7, Pmodelo8, Pmodelo9, Pmodelo10, Pmodelo11, Pmodelo12, Pmodelo13, Pmodelo14, Pmodelo15, 
    Pmodelo16, Pmodelo17, Pmodelo18, Pmodelo19, Pmodelo20]; 

    function ImageSwapper() {
        const [currentImage, setCurrentImage] = useState(null);
    
        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentImage(images[Math.floor(Math.random() * items.length)]);
            }, 5000)
            
            return () => clearInterval(intervalId);
        }, [])   
    }

const Nescola = () => {
  return (
    <section>
    <div>
        <img className='models' src={currentImage} alt="Modelos"/>
    </div>
    <p className='about'>
        <h1 className='about__title'>Sobre a nossa <spam>escola</spam></h1> <br/>
            
        Lorem Ipsum has been the industry's standard dummy<br/>
        text ever since the 1500s, when an unknown printer took a galley<br/>
        of type and scrambled it to make a type specimen book.<br/>
        Lorem Ipsum has been the industry's standard dummy<br/>
        text ever since the 1500s, when an unknown printer took a galley<br/>
        of type and scrambled it to make a type specimen book.<br/><br/>

        Lorem Ipsum has been the industry's standard dummy<br/>
        text ever since the 1500s, when an unknown printer took a galley<br/>
        of type and scrambled it to make a type specimen book.<br/>
        Lorem Ipsum has been the industry's standard dummy<br/>
        text ever since the 1500s, when an unknown printer took a galley<br/>
        of type and scrambled it to make a type specimen book.
    </p>
    </section>
  )
}

export default Nescola