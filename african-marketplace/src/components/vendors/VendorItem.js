import React from 'react'

export default function VendorItem(props) {

    const {location, name, price} = props.items

    return (
        <div >
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{location}</p>
        </div>
    )
}
