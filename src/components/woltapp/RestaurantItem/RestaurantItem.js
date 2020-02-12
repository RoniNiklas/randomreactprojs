import * as React from "react"
import { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import "./RestaurantItem.css"
import { Blurhash } from "react-blurhash"

const RestaurantItem = ({ restaurant }) => {
    const [image, setImage] = useState()
    useEffect(() => {
        if (restaurant.loadImage) {
            const loadImage = async () => {
                const loadedImage = new Image()
                loadedImage.onload = () => { setImage(loadedImage) }
                loadedImage.src = restaurant.image
            }
            loadImage()
        } else setImage()
    }, [restaurant.image, restaurant.loadImage])

    return (
        <Card className="card bg-light text-black">
            {image && restaurant.loadImage
                ? <Card.Img src={image.src} className="image" alt="Card image" />
                : <Blurhash as={Card.Img}
                    hash={restaurant.blurhash}
                    width="100%"
                    height="100%"
                    resolutionX={64}
                    resolutionY={64}
                />
            }
            <Card.Header>{restaurant.name}</Card.Header>
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