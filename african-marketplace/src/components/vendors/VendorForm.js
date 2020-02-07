import { useState, useEffect } from 'react'
import React from 'react'
import Select from 'react-select';
import axios from 'axios'

export default function VendorForm(props) {

    const [item, setItem] = useState(
        {
            "name": "",
            "location": "",
            "price": "",
        }
    )
    
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://africanmarketplace.herokuapp.com/mp/products', item)
    .then(res => {
        console.log(res)
        props.history.push('/african-marketplace')
    })
    .catch(err => console.log(err))    
}
  
    const handleChange = e => {
        return setItem({...item, [e.target.name]: e.target.value}, )
    }

    const locationOptions = [
        { value: 'rwanda', label: 'Rwanda' },
        { value: 'Uganda', label: 'Uganda' },
        { value: 'kenya', label: 'Kenya' },
      ];
    

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Add Items</label>
                <input 
                    placeholder='Add items'
                    id='nameinput'
                    name='name'
                    type= 'text'
                    value={item.name}
                    onChange={handleChange}
                    />
           <label htmlFor='location'>
           Location
           <Select options={ locationOptions } />
           </label>
                <input 
                    placeholder='Location'
                    id='locationinput'
                    name='location'
                    type= 'text'
                    value= {item.location}
                    onChange={handleChange}
                    />
           <label htmlFor='price'>Set Price</label>
                <input 
                    placeholder='price'
                    id='priceinput'
                    name='price'
                    type= 'text'
                    value= {item.price}
                    onChange={handleChange}
                    />

        <button type="submit">Submit</button>
        
        </form>
        </div>
)
}



