import React from 'react'
import './Form.css'


export default function Form(props) {
    const { values, onInputChange, onCheckboxChange, onSubmit, errors} = props


    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='header'>
                <h2>Build Your Own Pizza</h2>
            </div>
            <div className='picture'>
            </div>

            <label>Name:&nbsp;
                <p className='error'>{errors.name}</p>
                <input 
                    type='text'
                    value={values.name}
                    name='name'
                    onChange={onInputChange}
                />
            </label>

            <h4>Choice of Size</h4>
                <p>Required</p>
                <select 
                    value={values.size}
                    name='size'
                    onChange={onInputChange}
                >
                    <option value=''>--Select a Size --</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>

            <h4>Choice of Sauce</h4>
                <p>Required</p>
                <label>Original Red
                    <input 
                        checked={values.sauce === 'Original'}
                        value='Original'
                        onChange={onInputChange}
                        name='sauce'
                        type='radio'
                    />
                </label>
                <label>Ranch
                <input 
                    checked={values.sauce === 'Ranch'}
                    value='Ranch'
                    onChange={onInputChange}
                    name='sauce'
                    type='radio'
                />
                </label>
                <label>BBQ
                <input 
                    checked={values.sauce === 'BBQ'}
                    value='BBQ'
                    onChange={onInputChange}
                    name='sauce'
                    type='radio'
                />
                </label>
                <label>Alfredo
                <input 
                    checked={values.sauce === 'Alfredo'}
                    value='Alfredo'
                    onChange={onInputChange}
                    name='sauce'
                    type='radio'
                />
                </label>

            <div className='checkboxes'>
                <h4>Add Toppings</h4>
                <p>Choose up to 12</p>

                <label>Pepperoni
                    <input 
                        name='pepperoni'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.pepperoni}
                    />
                </label>
                <label>Sausage
                    <input 
                        name='sausage'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage}
                    />
                </label>
                <label>Bacon
                    <input 
                        name='bacon'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.bacon}
                    />
                </label>
                <label>Chicken
                    <input 
                        name='chicken'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.chicken}
                    />
                </label>
                <label>Onions
                    <input 
                        name='onions'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.onions}
                    />
                </label>
                <label>Peppers
                    <input 
                        name='peppers'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.peppers}
                    />
                </label>
                <label>Tomatoes
                    <input 
                        name='tomatoes'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.tomatoes}
                    />
                </label>
                <label>Olives
                    <input 
                        name='Olives'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.Olives}
                    />
                </label>
                <label>Garlic
                    <input 
                        name='garlic'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.garlic}
                    />
                </label>
                <label>Cheese
                    <input 
                        name='cheese'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.cheese}
                    />
                </label>
                <label>Pineapple
                    <input 
                        name='pineapple'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.pineapple}
                    />
                </label>
                <label>Artichoke
                    <input 
                        name='artichoke'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.artichoke}
                    />
                </label>
            </div>

            <h4>Special Instructions:</h4>
            <input className='instructions'
                    type='text'
                    value={values.instructions}
                    name='instructions'
                    onChange={onInputChange}
                />

            <button id='submitBtn'>Add To Order</button>



        </form>
    )

}