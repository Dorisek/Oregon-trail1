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
        console.log(this.eat)
    }
}

main.append('traveler');
let buttonElement = document.createElement('button')
let inputElement = document.createElement('input')

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
        for (let index = 0; index + this.food; index++) {
            var food = this.food + hunt[index]

            return this.totalFood
        }

    }

}



main.append('Wagon');

