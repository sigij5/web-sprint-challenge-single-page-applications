import React from 'react'
import {useHistory} from 'react-router-dom'
import './Home.css'


export default function Home(props) {
    const history = useHistory()
    const {orders} = props

    const routeToOrder = () => {
        history.push('/pizza')
    }

    return (
        <section className='home-page'>
            <header>
                <h2>Don't try coding while hungry!</h2>
                <button onClick={routeToOrder} className='orderBtn'>
                    Pizza?
                </button>
            </header>


            <div className='order-list'>
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
        </section>
    )
}