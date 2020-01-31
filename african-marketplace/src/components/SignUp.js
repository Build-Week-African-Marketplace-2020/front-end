import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SignUp(props) {

    const [newUser, setNewUser] = useState(
        {
            "username": "t",
            "password": "t",
            "first_name": "t",
            "last_name": "t"
        }
    )

    const handleChange = e => {
         setNewUser({...newUser, [e.target.name]: e.target.value})
        console.log(newUser.username)
    }

    useEffect(() => {
        axios.post('https://africanmarketplacels.herokuapp.com/auth/register', newUser)
             .then(res => {
                console.log(res)
                props.history.push('/login')
                alert(`Login to Continue!`)
             })
             .catch(err => console.log(err))
    }, [])

    return (
        <div>
           <div>
          <form>
        <label htmlFor='username'>Username</label>
           <input 
            placeholder='User Name'
            id='usernameinput'
            name='username'
            type= 'text'
            value={newUser.username}
            onChange={handleChange}
           />
          </form>
          <form>
        <label htmlFor='username'>Password</label>
           <input 
            placeholder='User Name'
            id='passwordinput'
            name='Password'
            type= 'text'
           />
           <button type="submit">Submit</button>
          </form>
        </div>
        </div>
    )
}
