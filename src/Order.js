import React from 'react'
import './Order.css'


export default function Order (props) {
    const {orders} = props


    return (


    <div className='order-list'>
        <h1>Congrats, your order is on the way!</h1>
        {console.log(orders)}
        {orders.map(order => {
            return (
                <div className='order'>
                    <h4>{order.name}</h4>
                    <ul>
                        <li>{`Size: ${order.size}`}</li>
                        <li>{`Sauce: ${order.sauce}`}</li>
                        <li>{`Toppings: ${order.toppings}`}</li>
                        <li>{`Instructions: ${order.instructions}`}</li>
                    </ul>
                </div>

            )
        })}
    </div>
    )
}