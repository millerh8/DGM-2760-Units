
async function getHotelData() {
    try {
        const response = await fetch('./hotel.json')
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

//let hotelLinks = document.querySelectorAll('a')
//hotelLinks.forEach(element)
document.querySelector('#marriott').addEventListener('click', hotelInfo)
document.querySelector('#sheraton').addEventListener('click', hotelInfo)
document.querySelector('#hilton').addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    
    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = hotelChoice.address
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms} rooms`
    document.querySelector('#gym').textContent = hotelChoice.gym
    document.querySelector('#type').textContent = hotelChoice.roomTypes
    document.querySelector('#picture').src = hotelChoice.picture
}