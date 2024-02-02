class Animal{
    constructor(){   
        if(this.constructor === Animal){
            throw new Error ('Animal cannot be called')
        }
    }

    eat(){
        console.log("Animals can eat")
    }

    move(){
        console.log("Animals can move")
    }

    die(){
        console.log("Animals can die")
    }

    makeSound(){
        console.log('Yes, animals makes sounds!')
    }
}

//const animal = new Animal()

class invertebrates extends Animal{
    noBackbone(){
        console.log('invertebrates have no backbone')
    }
}

const noBackbone = new invertebrates()
noBackbone.die()
noBackbone.eat()
noBackbone.makeSound()
noBackbone.move()
noBackbone.noBackbone()