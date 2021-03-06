import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/logo2-removebg-preview (1).png'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile_Card from './profile_card';
import { useParams, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';
import { Image } from 'cloudinary-react'



import Profile from './profile';
import Pedigree from './pedigree';
// const colstyle = {
//     row_style: {
//         margin: '1%',
//         backgroundColor: 'black',
//         border: '1px solid black'
//     },
//     column_style: {
//         padding: '1%',
//         border: '1px solid black',
//         fontSize: '2vw'
//     },
//     p_style: {
//         border: '1px solid black'
//     }
// }





// export default DogCard;
const card_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = card_style

export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} navigate={navigate} params={params} location={location} />;
    }

}

export class PedigreeFrame extends Component {

    constructor(props) {
        super(props)
        this.state = ''
    }

    render() {
        return (
            <div className='sire_sire'>



                {this.props.children}
            </div>
        )
    }

}



export class PedigreeDogCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dog_sire_name: ''
        }

    }
    render() {
        return (

            <div className='sire_sire_1'>
                <div className=''>
                    {this.props.dog_publicId ?
                        <img className={`${this.props.image_class}`}
                            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.dog_publicId}.png`}></img>
                        :
                        <img  className={`${this.props.image_class}`} src={Profile_pic}
                        >
                        </img>



                    }                         </div>
                <div className={`sire_sire_1 label justify-content-center ${this.props.class}`}> 
                    {this.props.dog_name == 'Unknown Genealogy'? 

                    <p className='text-capitalize smallrem'>  {this.props.dog_name}</p>
                :
                <a style={{ color: 'whitesmoke' }} href={`/my_dogs/${this.props.dog_id}`}>

                        <p className='text-capitalize smallrem'>  {this.props.dog_name}</p>
                    </a>
                }
                    

                </div>
            </div>


        )
    }

}


