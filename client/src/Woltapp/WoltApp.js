import React, { useState, useEffect } from 'react'
import RestaurantList from './Components/RestaurantList/RestaurantList'
import RestaurantRandomizer from "./Components/RestaurantRandomizer/RestaurantRandomizer"
import restaurantService from "./services/restaurant"
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