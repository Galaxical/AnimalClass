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

    //encapsulate features like bloodType and backbone features to be accessible by some specific

     #withBackBone(){
         console.log('they are Vertebrates')
     }

     vertebrates(){
         this.#withBackBone()
     }

     #withoutBackBone(){
         console.log('they are Invertebrates')
   }
    
    invertebrates(){
             this.#withoutBackBone()

        }

    #coldBlooded(){
             console.log('They are coldBlooded (regulate temperature externally)')
         }
         coldBlood(){
             this.#coldBlooded()
         }

         #warmBlooded(){
             console.log('They are warmblooded (regulate temperature internally)')
         }

         warmBlood(){
             this.#warmBlooded()
         }
}

class arthropods extends Animal{ //class arthropod with animal extension, and peculiar method

    constructor(){
         super()
        this.bodySections()
        this.invertebrates()
        this.coldBlood()
    }

    bodySections(){
        console.log('Arthropods has segmented bodies')
    }
}


class fish extends Animal{ //class amphibians with animal inheritance and peculiar characteristics

    constructor(){
         super()
        this.habitat()
        this.motion()
        this.vertebrates()
        this.coldBlood()
    }

    habitat(){
        console.log('Fishes ives in water')
    }

    motion(){
        console.log('Fishes swims in water')
    }
}

class amphibians extends Animal{ //class amphibians with animal inheritance and peculiar characteristics

    constructor(){
         super()
        this.habitat()
        this.invertebrates()
        this.coldBlood()
    }

    habitat(){
        console.log('Amphibians walk on land and live in water')
    }
}

class reptiles extends Animal{ //class amphibians with animal inheritance and peculiar characteristics

    constructor(){
         super()
        this.habitat()
        this.motion()
        this.vertebrates()
        this.coldBlood()
    }

    habitat(){
        console.log('Reptiles can live both on land and water')
    }

    motion(){
        console.log('Some can swim while some can walk on land')
    }
}
const butterfly = new arthropods() 
const frog = new amphibians()
const Fish = new fish()
const tortoise = new reptiles()
