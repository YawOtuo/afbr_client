import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from './weburl'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import '../css_files/registration_success.css'
import logo from '../images/logo2.jpg'


export const Litter_Register_Success = () => {

    const [dog, setDog] = useState({})
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        let user_ = JSON.parse(localStorage.getItem('user'))
        let public_id_ = JSON.parse(localStorage.getItem('public_id'))
        console.log(user_, public_id_)
        sendLitRegEmail(user_, public_id_)
        console.log('just sending email')

    }, [])

    const sendLitRegEmail = (user, public_id) => {
        axios
            .post(`${url}api/email/litter`, {
                user: user,
                public_id: public_id
                
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    

    const okay = ()=>{
       navigate('/profile')
    }

    const dogDetails = () => {

        return Object.keys(dog).map((key) =>
            <p className='text-capitalize'>{key}: {dog[key]}</p>
        )
    }


    return <div className='container-fluid'>
        <Navbar />
        <div className='container-fluid w-100 registration_success_full'>


            <div className='row align-items-center justify-content-center p1 py-5'>
                <div className='col-lg-'>
                    <p className='text-capitalize text-white'>Hello {user.displayName}, you have 
                    successfully registered completed a litter registration form</p>

                </div>

            </div>
            <div className='row align-items-center justify-content-center p2 my-3'>
                <div className='col-sm-6 my-5'>

                  
                </div>
                <div className='col-sm-6'>
                        {dogDetails()}

                    </div>


            </div>
            <div className='row align-items-center justify-content-center p3 '>
                <div className='col-sm-'>

                    <p>Click Okay to Complete PRocess</p>
                    <button className='btn btn-success w-100 ok' onClick={okay}>OK</button>


                </div>

            </div>

        </div>
    </div>
}