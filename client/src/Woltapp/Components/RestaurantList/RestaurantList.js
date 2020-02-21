import React, { useState } from 'react'
import RestaurantItem from "../RestaurantItem/RestaurantItem"
import restaurantService from "../../services/restaurant"
import Button from 'react-bootstrap/Button'
import "./RestaurantList.css"

const RestaurantList = ({ restaurants }) => {

    const [restaurantState, setRestaurantState] = useState(restaurants)

    const sort = (event) => {
        const sortedRestaurants = restaurantService.sort(restaurants, event.target.value)
        setRestaurantState(sortedRestaurants)
    }

    return (
        <div>
            <h2>Or select from all restaurants</h2>
            <Button variant="primary" value="alphabetically" className="sorting-button" onClick={sort}>Sort alphabetically from A to Z</Button>
            <Button variant="primary" value="in-reverse" className="sorting-button" onClick={sort}>Sort alphabetically from Z to A</Button>
            <div className="restaurant-list">
                {restaurantState.map(restaurant => <RestaurantItem key={restaurant.name} restaurant={{...restaurant, loadImage:true}} />)}
            </div>
        </div>
    )
}

export default RestaurantList