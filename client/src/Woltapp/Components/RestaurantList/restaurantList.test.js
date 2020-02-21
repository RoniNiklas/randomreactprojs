import restaurantService from "../../services/restaurant"
import * as React from 'react'
import { actRender } from "../../test/utils"
import RestaurantList from "./RestaurantList"

jest.mock('../../services/restaurant.js')
beforeEach(() => {
    jest.clearAllMocks()
    restaurantService.getAll.mockResolvedValue([{ 
        name: "Hesburger",
        description: "Buy hamburgers here",
        online: false,
        image: "https://uaewebsitedevelopment.com/wp-content/uploads/2019/02/Free.jpg"
     }])
  })
test('getAll returns a full, unsorted list', async () => {
    const { queryByText } = actRender(<RestaurantList />)
})