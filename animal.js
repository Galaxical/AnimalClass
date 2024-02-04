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

//In the last commit, No need for the body temp and backbone encapsulation: I deleted them
//Since these are already encapsulated and inherited in the abstracted animal class

    
}

class arthropods extends Animal{ //arthropods inherits from the base class while applying polymorphism in movement

    /*in this commit, I am changing using the constructor method after 
    modifying the animal class properties using abstraction and polymorphism
    */

    _animClass = 'I am class Arthropods'
    _bodyTemp = 'I am Cold blooded'
    _backBone = 'I do not have any backbone'

    //applying polymorphism to depict unique movement of arthropods
    constructor(locomotion){
        super()
        this.locomotion = 'We may move by flying, crawling, or web!'
    }

    movement(){
        const movement = this.locomotion
        return movement
    }
}


// class fish extends Animal{ //class amphibians with animal inheritance and peculiar characteristics

//     constructor(){
//          super()
//         this.habitat()
//         this.motion()
//         this.vertebrates()
//         this.coldBlood()
//     }

//     habitat(){
//         console.log('Fishes ives in water')
//     }

//     motion(){
//         console.log('Fishes swims in water')
//     }
// }

// class amphibians extends Animal{ //class amphibians with animal inheritance and peculiar characteristics

//     constructor(){
//          super()
//         this.habitat()
//         this.invertebrates()
//         this.coldBlood()
//     }

//     habitat(){
//         console.log('Amphibians walk on land and live in water')
//     }
// }

// class reptiles extends Animal{ //class amphibians with animal inheritance and peculiar characteristics

//     constructor(){
//          super()
//         this.habitat()
//         this.motion()
//         this.vertebrates()
//         this.coldBlood()
//     }

//     habitat(){
//         console.log('Reptiles can live both on land and water')
//     }

//     motion(){
//         console.log('they move by crawling or while swimming')
//     }
// }

// class Aves extends Animal{ //class amphibians with animal inheritance and peculiar characteristics

//     constructor(habitat, motion, beak, feather){
//          super()
//         this.habitat()
//         this.motion()
//         this.vertebrates()
//         this.warmBlood()
//         this.beak()
//         this.feather()
//     }

//     habitat(){
//         console.log('Aves are aboral; they live on trees')
//     }

//     motion(){
//         console.log('aves move by flying')
//     }

//     feather(){
//         console.log('unique features as wings used for flying')
//     }
    
//     beak(){
//         console.log('mouth structure for picking food grains')
//     }
    
// }
const butterfly = new arthropods() 
console.log(butterfly)

// const frog = new amphibians()
// const Fish = new fish()
// const tortoise = new reptiles()
// const birds = new Aves()
