import React from 'react'
import "./Classes.scss";
import Cards from "../../Components/Cards/Cards"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = ({data}) => {
   console.log(data)

  return (
    <div className='product__view'>
        <Navbar/>
            <section >
                <img className='home_img' src='' alt='Website Cover'/>
            </section>
            <section className='home_cards'>
            {data.map( (product) => 
            (<Cards key={data.id} data={product}/>
            ))}
            </section>
        <Footer />
    </div>
  )
}

export default Home