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
            <header className='image-header'>
                <h2>Don't try coding while hungry!</h2>
                <button onClick={routeToOrder} className='orderBtn'>
                    Pizza?
                </button>
            </header>


        </section>
    )
}