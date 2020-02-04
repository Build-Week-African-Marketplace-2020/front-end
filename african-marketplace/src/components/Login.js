import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

export default function Login(props) {

    const [logindata, setLoginData] = useState(
        {
            "username": "", 
            "password": "", 
        }
    )
    
    const handleChange = e => {
        return setLoginData({...logindata, [e.target.name]: e.target.value}, )
    } 

    
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://africanmarketplacels.herokuapp.com/auth/login', logindata)
        .then(res => {
            console.log(res)
            props.history.push('/african-marketplace')
        })   
        .catch(err => console.log(err))
    }
    
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                placeholder='User Name'
                id='usernameinput'
                name='username'
                type= 'text'
                value={logindata.username}
                onChange={handleChange}
            />
            <label>Password</label>
            <input 
                placeholder='*****'
                id='passwordinput'
                name='password'
                type= 'password'
                value={logindata.password}
                onChange={handleChange}
            />

           <button type="submit">Submit</button>
          </form>
        </div>
    )
}


