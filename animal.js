class Animal{
    constructor(){ //Abstracting base class for inheritance   
        if(this.constructor === Animal){
            throw new Error ('Animal cannot be called')
        }
    }

    //Encapsulating properties accessible by subclasses
    _animClass = 'animClass';
    _bodyTemp = 'bodyTemp';
    _backBone = 'backBone';

    //abstracting animal class properties for polymorphism
    movement(){
        throw new Error ('this cannot be implemented')
    }

    skinCovering(){
        throw new Error ('this cannot be implemented')
    }

//In the last commit, No need for the body temp and backbone encapsulation: I deleted them
//Since these are already encapsulated and inherited in the abstracted animal class

}


class arthropods extends Animal{ //arthropods inherits from the base class while applying polymorphism in movement

    /*in this commit, I am changing using the constructor method after 
    modifying the animal class properties using abstraction and polymorphism
    */

    _animClass = 'I am from class Arthropod'
    _bodyTemp = 'we are are Cold blooded'
    _backBone = 'we do not have any backbone'

    //applying polymorphism to depict unique movement and skin covering of arthropods
    constructor(locomotion, skin){
        super()
        this.locomotion = 'we may move by flying, crawling, or web!'
        this.skin = 'We do not have hair or skin covering properties'
    }

    movement(){
        const movement = this.locomotion
        return movement
    }

    skinCovering(){
        const skinCovering = this.skin
        return skinCovering
    }
}

class Fish extends Animal{ //fish inherits from the base class while applying polymorphism in movement

    _animClass = 'I am from class Fish'
    _bodyTemp = 'we are cold blooded animal'
    _backBone = 'we have backbone'
    fin = 'we use it to direct our movement'

    //applying polymorphism to depict unique movement of fishes
    constructor(locomotion, skin){
        super()
        this.locomotion = 'we move by swimming'
        this.skin = 'scales cover our skin'
    }

    movement(){
        const movement = this.locomotion
        return movement
    }

    skinCovering(){
        const skinCovering = this.skin
        return skinCovering
    }
} 

class Amphibian extends Animal{ //fish inherits from the base class while applying polymorphism in movement

    _animClass = 'I am from class Amphibian'
    _bodyTemp = 'we are cold blooded animals'
    _backBone = 'we have backbone'
    habitat = 'we live in water and move on land'

    //applying polymorphism to depict unique movement of amphibians
    constructor(locomotion, skin){
        super()
        this.locomotion = 'we move by hopping'
        this.skin = 'our skins have pore with no covering; sometimes poisonous'
    }

    movement(){
        const movement = this.locomotion
        return movement
    }

    skinCovering(){
        const skinCovering = this.skin
        return skinCovering
    }
} 

class Reptiles extends Animal{ //reptiles inherits from the base class while applying polymorphism in movement

    _animClass = 'I am from class Reptile'
    _bodyTemp = 'we are cold blooded animal'
    _backBone = 'we have backbone'
    
    //applying polymorphism to depict unique movement of reptiles
    constructor(locomotion, skin){
        super()
        this.locomotion = 'we move by crawling'
        this.skin = 'some have no skin; some are sharp scales'
    }

    movement(){
        const movement = this.locomotion
        return movement
    }

    skinCovering(){
        const skinCovering = this.skin
        return skinCovering
    }
} 

class Aves extends Animal{ //Aves inherits from the base class while applying polymorphism in movement

    _animClass = 'I am from class Aves'
    _bodyTemp = 'we are warm blooded animal'
    _backBone = 'we have backbone'
    wings = 'we use it to direct our movement'
    beak = 'we use the beak to pick food grains'

    //applying polymorphism to depict unique movement of arthropods
    constructor(locomotion, skin){
        super()
        this.locomotion = 'we move by swimming'
        this.skin = 'we have feathers that covers our skin'
    }

    movement(){
        const movement = this.locomotion
        return movement
    }

    skinCovering(){
        const skinCovering = this.skin
        return skinCovering
    }
} 

class Mammals extends Animal{//abstracting animal base class for inheritance by Mammals
    _animClass = 'Mammals'
    _backBone = 'we have backbone'
    _bodyTemp = 'we are warm blooded animals'
    childCare = 'we have breasts for to feed our children'

    //applying polymorphism for to depict the unique movement and skin type of Mammals
    constructor(locomotion, skin){
        super()
        this.locomotion = 'we move by walking'
        this.skin = 'we have hairs and furs that covers our skin'
    }

    movement(){
        const movement = this.locomotion
        return movement
    }

    skinCovering(){
        const skinCovering = this.skin
        return skinCovering
    }
}



const butterfly = new arthropods() 
const tuna = new Fish()
const frog = new Amphibian()
const tortoise = new Reptiles()
const raven = new Aves()
const man = new Mammals()
console.log(butterfly)
console.log(tuna)
console.log(frog)
console.log(tortoise)
console.log(raven)
console.log(man)
// const frog = new amphibians()
// const Fish = new fish()
// const tortoise = new reptiles()
// const birds = new Aves()
