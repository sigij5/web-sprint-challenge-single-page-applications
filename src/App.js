import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from 'react-router-dom'
import Form from './Form'
import Home from './Home'
import './App.css'
import axios from 'axios'
import * as Yup from "yup";


const formSchema = Yup.object().shape({
  name: Yup
  .string()
  .min(2, "Names must be at least 2 characters long."),
});

const initialFormValues = {
  name:'',
  size: '',
  sauce:'',
  toppings: {
    pepperoni:false,
    sausage:false,
    bacon:false,
    chicken:false,
    onions:false,
    peppers:false,
    tomatoes:false,
    olives:false,
    garlic:false,
    cheese:false,
    pineapple:false,
    artichoke:false,
  },
  substitute:false,
  instructions: '',
}

const initialOrders = []
const initialErrors = {
  name: ''
}

export default function App(props) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orders, setOrders] = useState(initialOrders)
  const [formErrors, setFormErrors] = useState(initialErrors)

  const onInputChange = evt => {
    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]:''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues({
      ...formValues, 
      toppings: {
        ...formValues.toppings,
        [name]:checked,
      }
    })

  }

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders/23')
      .then(response => {
        setOrders(response.data.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders/23', newOrder)
      .then(res => {
        setOrders([...orders, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() =>{
        setFormValues(initialFormValues)
      })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      sauce:formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => (formValues.toppings[topping] === true)),
      instructions:formValues.instructions
    }

    postNewOrder(newOrder)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className='App'>
      <nav className='nav-bar'>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
      </nav>
    <Switch>

      <Route path='/pizza'>
        <Form 
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          errors={formErrors}
        />
      </Route>

      <Route path='/'>
        <Home orders={orders}/>
      </Route>
    </Switch>

    </div>
  );
};
