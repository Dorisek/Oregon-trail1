let main = document.querySelector("main")


class traveler {
    constructor(name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }

    hunt() {
        this.food += 2
    }

    eat() {

        if (this.food === 0) {

            return this.isHealthy = false
        } else {
            this.food -= 1

        }
    }

}

main.append();


let button1Element = document.createElement('button')
let button2Element = document.createElement('button')
let inputElement = document.createElement('input')

main.appendChild(button1Element)
main.appendChild(button2Element)
main.appendChild(inputElement)

button1Element.append('feed')
button2Element.append('add')

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []

    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length

    }

    join(traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            var passenger = this.passengers[index]
            if (passenger.isHealthy === false) {
                return true
            }

        }
        return false
    }
    totalFood() {
        var foodpassengers = 0

        for (let index = 0; index < this.passengers.length; index++) {
            var passenger = this.passengers[index]
            foodpassengers += passenger.food

        }
        return foodpassengers
    }

}


