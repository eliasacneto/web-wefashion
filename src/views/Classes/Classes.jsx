import React from 'react'
import "./Classes.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Classes = () => {
   console.log(data)

  return (
    <div className='product__view'>
        <Navbar/>
          <div className='rollSet'>
            <ClassForm />
          </div>
        <Footer />
    </div>
  )
}

export default Classes