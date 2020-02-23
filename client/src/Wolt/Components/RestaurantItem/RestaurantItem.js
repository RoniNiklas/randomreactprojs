import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import "./RestaurantItem.css"
import { Blurhash } from "react-blurhash"

const RestaurantItem = ({ restaurant }) => {
    const [image, setImage] = useState()
    useEffect(() => {
        const loadedImage = new Image()
        if (restaurant.loadImage) {
            const loadImage = async () => {
                loadedImage.onload = () => { setImage(loadedImage) }
                loadedImage.src = restaurant.image
            }
            loadImage()
        } else setImage()
        return () => {
            loadedImage.onload = () => {}
        }
    }, [restaurant])

    return (
        <Card className="card bg-light text-black restaurantItem">
            {image && restaurant.loadImage
                ? <Card.Img src={image.src} className="restaurantImage" alt="Card image" />
                : <Blurhash as={Card.Img}
                    hash={restaurant.blurhash}
                    width="100%"
                    height="240px"
                    resolutionX={64}
                    resolutionY={64}
                />
            }
            <Card.Header className="restaurantHeader">{restaurant.name}</Card.Header>
            <Card.Text className="description">
                {restaurant.description}
            </Card.Text>
            <Card.Text className="open" style={{ backgroundColor: restaurant.online ? "green" : "red" }}>
                {restaurant.online ? "Open" : "Closed"}
            </Card.Text>
        </Card>
    )
}

export default RestaurantItem