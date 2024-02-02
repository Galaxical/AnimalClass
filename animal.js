class Animal{
    constructor(){ //an abstract class   
        if(this.constructor === Animal){
            throw new Error ('Animal cannot be called')
        }
    }

    //general methods for abstract class animal
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

class invertebrates extends Animal{ // subclass invertebrate to perform abstracted animal methods
    noBackbone(){
        console.log('invertebrates have no backbone')
    }
}

const noBackbone = new invertebrates()

class vertebrates extends Animal{ // subclass vertebrates to perform abstracted animal methods
    withBackBone(){
        console.log('vertebrates have backbone')
    }
}

const yesBackBone = new vertebrates()

class warmBlooded extends Animal{ // subclass warmblooded performs abstracted animals
    regulateTemperature(){
        console.log('regulates temperature from internal sources')
    }
}

const internalRegulator = new warmBlooded()

class coldBlooded extends Animal{ //subclass coldblooded performs abstracted animal methods
    regulateTemperature(){
        console.log('regulates temperature from external sources')
    }
}

const externalRegulator = new coldBlooded()