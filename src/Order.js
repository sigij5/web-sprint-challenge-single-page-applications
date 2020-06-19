import React from 'react'


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
                    <p>{`${order.size}, ${order.sauce}, ${order.toppings}, ${order.instructions}`}</p>
                </div>

            )
        })}
    </div>
    )
}