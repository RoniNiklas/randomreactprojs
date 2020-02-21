import restaurantsJSON from "../data/restaurants"

const getAll = () => {
    const restaurants = restaurantsJSON.restaurants
    return restaurants
}

const nameCompare = (a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()

    let comparison = 0
    if (nameA > nameB) {
        comparison = 1
    } else if (nameA < nameB) {
        comparison = -1
    }
    return comparison
}

const sort = (restaurants, order) => {
    return order === "alphabetically"
        ? [...restaurants].sort(nameCompare)
        : [...restaurants].sort(nameCompare).reverse()
}
export default { getAll, sort }