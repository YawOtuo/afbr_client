import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/judges.css'
import judges from '../images/judge1-removebg-preview.png'



class Judges extends Component {

    render() {
        return (
            <div>
                <div className='row align-items-center justify-content-center '>

                    <Navbar />
                    <div className='container-fluid judges_full'>
                        <div className='row align-items-center justify-content-center judges_text'>
                            <div className='col-md- py-5'>
                                <h1 className=' py-5 my-5'>Judges</h1>
                                <p className='p_apply text-white text-large'>Apply as a Judge</p>
                                <p className='p_apply text-white text-large'>Sign up, Send us an <a className='text-white text-lowercase'
                                 href="mailto:africanbullyregistry@gmail.com">email</a> and we will contact you</p>

                                <p className='my-5 py-5'>THE AFRICAN BULLY REGISTRY</p>
                            </div>
                            {/* 
                            <div className='col-md-6 shows_img_col'>
                                <img src={judges} className='shows_img'></img>
                            </div> */}
                        </div>

                    </div>
                    <div className='row align-items-center justify-content-end judges_text'>


                    </div>

                </div>

            </div>


        )
    }



}



export default Judges;