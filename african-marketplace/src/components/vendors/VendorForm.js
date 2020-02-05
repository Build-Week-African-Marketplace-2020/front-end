import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

export default function VendorForm() {

    const [item, setItem] = useState(
        {
            "item": "",
            "amount": "",
            "price": "",
        }
    )
    
    useEffect(() => {
        axios.post('app', item)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])
  
    const handleChange = e => {
        return setItem({...item, [e.target.name]: e.target.value}, )
    }

    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='item'>Add Items</label>
                <input 
                    placeholder='Add items'
                    id='iteminput'
                    name='item'
                    type= 'text'
                    value={item.name}
                    onChange={handleChange}
                    />
           <label htmlFor='amount'>Amount</label>
                <input 
                    placeholder='User Name'
                    id='amountinput'
                    name='amount'
                    type= 'text'
                    value= {item.amount}
                    onChange={handleChange}
                    />
           <label htmlFor='price'>Set Price</label>
                <input 
                    placeholder='price'
                    id='priceinput'
                    name='price'
                    type= 'text'
                    value= {item.amount}
                    onChange={handleChange}
                    />
        <button type="submit">Submit</button>
        </form>
        </div>
)
}
