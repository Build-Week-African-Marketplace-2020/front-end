import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import {loginInfo} from '../data/data'

export default function Login() {

    const [logindata, setLoginData] = useState(
        {
            "username": "", 
            "Password": "", 
        }
    )
    
    const handleChange = e => {
        return setLoginData({...logindata, [e.target.name]: e.target.value}, )
    } 

    useEffect(() => {
        axios.post('https://africanmarketplacels.herokuapp.com/auth/login', logindata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
          <form>
        <label htmlFor='username'>Username</label>
           <input 
            placeholder='User Name'
            id='usernameinput'
            name='Username'
            type= 'text'
            value=''
           />
          </form>
          <form>
        <label htmlFor='username'>Password</label>
           <input 
            placeholder='User Name'
            id='passwordinput'
            name='Password'
            type= 'text'
            value=''
           />

           <button type="submit">Submit</button>
          </form>
        </div>
    )
}


