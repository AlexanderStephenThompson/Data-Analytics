// Create a character class with name, species and age.
export class character{
    constructor(name, species, age){
        this.name = name;
        this.species = species;
        this.age = age;
    }


    introduceSelf(){
        return `Hi, my name is ${this.name} and I am a ${this.species} and I am ${this.age} years old.`
    }
}