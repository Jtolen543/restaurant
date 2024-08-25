import '/src/css/styles.css'
import stuff1 from "/src/images/bpie.jpg"
import stuff2 from "/src/images/ppie.jpeg"
import stuff3 from "/src/images/apie.jpg"
import stuff4 from "/src/images/pie.jpeg"

console.log("test")
const content = document.getElementById("content")

const home_button = document.querySelector("#home")
home_button.addEventListener("click",  () => {
    content.innerText = ""
    const temp = document.createElement("div")
    temp.classList.add("container")
    const title = document.createElement("div")
    title.textContent = "The Pie Factory"
    const description = document.createElement("div")
    description.classList.add("description")
    description.textContent = "The Pie Factory is a dedicated haven for pie enthusiasts, specializing exclusively in baking and selling pies. This unique establishment takes pride in its singular focus, offering a wide array of pies that cater to every taste. From time-honored classics like apple, pecan, and cherry to innovative seasonal creations, each pie is crafted with precision and care, using only the highest quality ingredients."
    const image = document.createElement("img")
    image.src = stuff3
    temp.appendChild(title)
    temp.appendChild(description)
    temp.appendChild(image)
    content.appendChild(temp)
})

const menu_button = document.querySelector("#menu")
menu_button.addEventListener("click", ()=> {
    content.innerText = ""
    const food_container = document.createElement("div")
    food_container.classList.add("foodery")
    
    food_container.appendChild(addFoodCard("Blueberry Pie", "Blueberry pie is a delightful dessert featuring a buttery crust filled with juicy, sweet-tart blueberries, often enjoyed for its vibrant flavor and summery appeal.", "$10.99", stuff1))
    food_container.appendChild(addFoodCard("Pumpkin Pie", "Pumpkin pie is a traditional fall dessert with a creamy, spiced pumpkin filling encased in a flaky crust, celebrated for its warm, comforting flavors during the holiday season.", "$14.99", stuff2))
    food_container.appendChild(addFoodCard("Apple Pie", "Apple pie is a classic dessert made with a flaky crust and filled with sweet, spiced apples, often served warm and enjoyed as a symbol of comfort and tradition.", "$10.99", stuff3))
    food_container.appendChild(addFoodCard("Raspberry Pie", "Raspberry pie is a sweet and tangy dessert with a buttery crust filled with fresh raspberries, offering a burst of fruity flavor in every bite.", "$13.99", stuff4))
    content.appendChild(food_container)
})

const contact_button = document.querySelector("#contact")
contact_button.addEventListener("click", ()=> {
    content.innerText = ""
    const container = document.createElement("div")
    container.classList.add("container")
    container.id = "contact"
    const number = document.createElement("div")
    number.textContent = "3-141-592-6535"
    const location = document.createElement("div")
    location.textContent = "Piezilla Pizzaria, 3.14 Aristotle Avenue, Edge of Universe"
    const email = document.createElement("div")
    email.textContent = "pieprofessionals@pie.com"
    container.appendChild(number)
    container.appendChild(email)
    container.appendChild(location)

    content.appendChild(container)
})

function addFoodCard(stuff, things, rando, pie) {
    const temp = document.createElement("div")
    temp.classList.add("container")
    temp.id="food"
    const food_card = document.createElement("div")
    food_card.classList.add("formatation")
    const container = document.createElement("div")
    container.classList.add("information")
    const info1 = document.createElement("div")
    info1.classList.add("name")
    info1.textContent = stuff
    const description1 = document.createElement("div")
    description1.textContent = things
    const price1 = document.createElement("div")
    price1.textContent = rando
    const imagery = document.createElement("img")
    imagery.src =  pie;
    container.appendChild(info1)
    container.appendChild(description1)
    container.appendChild(price1)
    food_card.appendChild(container)
    food_card.appendChild(imagery)
    temp.appendChild(food_card)
    return temp
}

home_button.click()