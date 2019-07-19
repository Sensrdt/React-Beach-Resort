import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

// getting the unique value
const UniqueValues = (item, value) =>{
    // used set as it only contains unique value
    return [...new Set(item.map(item => item[value]))];
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    console.log("Calling the context from RoomFilters ---");
    console.log(context);
    const {
        handleChange, 
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    let canChange = UniqueValues(rooms, "type");
    canChange = ["all", ...canChange];
    // looping through all the values
    // adding the jsx
    canChange = canChange.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));
    let no_of_people = UniqueValues(rooms, "capacity");
    no_of_people = no_of_people.map((item, index )=> (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    return (
        <section className="filter-container">
             <Title title="search rooms"/>
             <form className="filter-form">
                 <div className="form-group">
                     <label htmlFor="type">room type</label>
                    <select 
                        name = "type"
                        id = "type"
                        value = {type}
                        className = "form-control"
                        onChange = {handleChange}
                        >
                        {canChange}
                        </select>  
                 </div>
                 <div className="form-group">
                     <label htmlFor="type">capacity</label>
                    <select 
                        name = "capacity"
                        id = "capacity"
                        className = "form-control"
                        onChange = {handleChange}
                        >
                        {no_of_people}
                        </select>  
                 </div>
                 <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                        type="number"
                        name="minSize"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                        <input
                        type="number"
                        name="maxSize"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                    </div>
                </div>
            </form>
        </section>
    )
}
