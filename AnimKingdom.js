class Animal{
    constructor(){ //Abstracting the base class
        if(this.constructor === Animal){
            throw new Error('Animal cannot be called')
        }
    }

    //Encapsulate the properties to be accessible by subclasses
    _animalClass = 'animalClass';
    _bodyTemp = 'bodyTemp';
    _backbone = 'backbone';

    movement(){
        throw new Error('this cannot be implemented')
    }
    eat(){}

}

//const anim = new Animal()

class fish extends Animal{ //fish inherits from the base class, Animal
    _animalClass = 'fish'
    _bodyTemp = 'I am cold blooded'
    _backbone = 'I am a vertebrate; i have backbone'
    move = 'I move by swimming'
    fins = 'I use them for movement' 
    
    constructor(loco){
        super()
        this.loco = 'I move by swimming'
    }
    
    movement(){
        const movement = this.loco
        return movement
    }
}

const tuna = new fish()
console.log(tuna)
