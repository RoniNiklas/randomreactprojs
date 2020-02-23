import restaurantService from "./restaurant"

test('getAll returns a full, unsorted list', async () => {
    const restaurants = restaurantService.getAll()
    expect(restaurants.length).toBe(50)
    expect(restaurants[0].name).toBe("Social Burgerjoint Citycenter")
})
test('sorting alphabetically returns a full, alphabetically sorted list', async () => {
    const restaurants = restaurantService.getAll()
    const sortedRestaurants = restaurantService.sort(restaurants, "alphabetically")
    expect(sortedRestaurants.length).toBe(50)
    expect(sortedRestaurants[0].name).toBe("Arnolds Forum")
})
test('sorting alphabetically in a reversed order returns a full, alphabetically sorted list in a reversed order', async () => {
    const restaurants = restaurantService.getAll()
    const sortedRestaurants = restaurantService.sort(restaurants, "in-reverse")
    expect(sortedRestaurants.length).toBe(50)
    expect(sortedRestaurants[0].name).toBe("Zhonghua")
})