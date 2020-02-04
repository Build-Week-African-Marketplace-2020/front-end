import React from 'react'
import { axiosWithAuth } from '../util/api'


export default function Nav(props) {

    const logOut = () => {
        axiosWithAuth()
                .get('/auth/logout')
                .then(res => (console.log(res)))
                .catch(err => (console.log(err)))
    }

    return (
        <div>
            <h1>African Marketplace</h1>
            <button type='button' onClick={() => (props.history.push('/african-marketplace/sell'))}>Sell</button>
            <button type='button' onClick={logOut}>Log Out</button>
        </div>
    )
}
