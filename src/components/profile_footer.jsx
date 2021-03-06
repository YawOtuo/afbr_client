import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../css_files/profile.css'
import DogCard from './dog_card';
import Navbar from './navbar';
import { auth, db, Logout } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import $ from 'jquery'
import axios from 'axios'
import { url } from './weburl';


export class ProfileFooter extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.getcurrentuser()
        
        
            if (window.screen.width < 660){
                console.log('hide the following')
                $('.to_be_hidden_profile').css('display', 'none')
                $('to_be_hidden_profile').on(
                    'click', function(){
                        $('to_be_hidden_profile').slideToggle()
                    }
                )
            }
        
    }
    changeUserToId = () => {
        axios
            .get(`${url}api/users/getUserByUid/${this.state.firebaseUser.uid}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    user: res.data[0]
                },
                    () => {
                        console.log('chaingn personal state after calling uid', this.state)

                    })
            })

            .catch((err) => {
                console.log(err)
            })
    }


    getcurrentuser = (callback) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ ...this.state, firebaseUser: user }, () => {
                    console.log('on Authstate profile', this.state.firebaseUser)
                    this.changeUserToId()

                });

            } else {
                this.setState({ user: null });
                console.log('displatyin data from profile')

            }

            if (this.state.loading) {
                this.setState({ loading: false });
            }
        });
    }

    render(){
        return <div className='profile_footer_full mt-5'>
          
                        <div className='row align-items-center justify-content-center py-1 '>
                           {this.state.firebaseUser ? <Link className='smallrem' to={`/profile/personal/${this.state.firebaseUser.uid}`}  style={{color:this.props.navbarcolor}}>Personal</Link> :  <Link className='smallrem' to='/profile/personal/'>Personal</Link> }
                        </div>
                        <div className='row align-items-center justify-content-center py-1 '>
                            <Link className='smallrem' style={{color:this.props.navbarcolor}} to='/my_dogs'>My dogs</Link>
                        </div>
                        <div className='row align-items-center justify-content-center py-1 '>
                            <Link  className='smallrem' style={{color:this.props.navbarcolor}} to='/registration'>Register</Link>
                        </div>
                        <div className='row align-items-center justify-content-center py-1'>
                            <Link className='smallrem' style={{color:this.props.navbarcolor}}  to='/profile/csandps'>Certificates and Pedigrees</Link>
                        </div>
                        <div className='row align-items-center justify-content-center py-1'>
                            <button style={{color:this.props.navbarcolor}}  className='btn btn-default smallrem' onClick={Logout}>Log Out</button>
                        </div>

    </div>
    }
    
}