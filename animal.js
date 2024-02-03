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
         console.log('Are Vertebrates')
     }

     vertebrates(){
         this.#withBackBone()
     }

     #withoutBackBone(){
         console.log('Are Invertebrates')
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

class arthropods extends Animal{

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


class amphibians extends Animal{

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

const butterfly = new arthropods() 
const frog = new amphibians()

