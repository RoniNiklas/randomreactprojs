import React, { useState, useEffect } from 'react'
import RestaurantList from './RestaurantList/RestaurantList'
import RestaurantRandomizer from "./RestaurantRandomizer/RestaurantRandomizer"
import restaurantService from "../../services/woltApp/restaurant"
import "./WoltApp.css"

const WoltApp = () => {
    const [restaurants, setRestaurants] = useState()
    useEffect(() => {
        setRestaurants(restaurantService.getAll())
    }, [])

    return (
        <div className="woltapp-root">
            {restaurants && <RestaurantRandomizer restaurants={restaurants} />}
            {restaurants && <RestaurantList restaurants={restaurants} />}
        </div>

    )
}

export default WoltApp