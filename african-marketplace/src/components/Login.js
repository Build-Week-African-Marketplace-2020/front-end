import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {loginInfo} from '../data/data'

export default function Login() {

    const [newUser, setNewUser] = useState(
        {
            "username": "aaron12",
            "password": "aaron123",
        }
    )

    useEffect(() => {
        axios.post('https://africanmarketplacels.herokuapp.com/auth/login', newUser)
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}
