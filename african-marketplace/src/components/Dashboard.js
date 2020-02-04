import React, { useEffect, useState, createContext } from 'react'
import { axiosWithAuth } from '../util/api'
import VendorItem from './vendors/VendorItem'

export default function Dashboard() {

    const [ marketItems, setMarketItems ] = useState([])

    const MarketContext = createContext();

    useEffect(() => {
        axiosWithAuth()
            .get('/mp/products')
            .then(res => {
                setMarketItems(res.data)
                console.log(res.data)
                console.log(marketItems)
            })
            .catch(err => console.log(err))
    }, [marketItems.length])

    return (
        <div>
            <MarketContext.Provider value={{marketItems, setMarketItems}}>
                <section>
                    <h1>Shop Now !</h1>
                </section>
                <MarketContext.Consumer>
                    {value => value.marketItems.map(item => (
                       <VendorItem key={item.id} items={item} /> 
                    ))}
                </MarketContext.Consumer>
            </MarketContext.Provider>
        </div>
    )
}
