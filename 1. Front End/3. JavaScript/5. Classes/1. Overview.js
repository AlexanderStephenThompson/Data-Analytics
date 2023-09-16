/*

Prototypes
Before classes were made, you could use prototypes to make objects of the same attributes.
While both are valid, they're basically the same, but classes are a syntactic sugar version of
prototypes so that they're more inline with other object oriented programming. So, these days, 
it's pretty clear classes are much more preferred. 

function Character(First_Name, Last_Name, Species, Height, Gender) {
  this.First_Name = First_Name;
  this.Last_Name = Last_Name;
  this.Species = Species;
  this.Height = Height;
  this.Gender = Gender;
}
const Rufus = new Character("Rufus", "Cobber", "Kangaroo", "12'3", "Male");
document.getElementById("demo").innerHTML =  `Hey! I am ${this.First_Name} and a ${this.Species}!`;


Classes
Resources
 - https://www.sitepoint.com/javascript-private-class-fields/

class Class_Name{

    /// ~~~ Constructor ~~~ - Defining the attributes of each object. Can also use data classes
    constructor(First_Attribute, Second_Attribute, Third_Attribute) {
        this.First_Attribute = First_Attribute;
        this.Second_Attribute = Second_Attribute;
        this.Third_Attribute = Third_Attribute;
    }

    /// ~~~~~ Static Methods ~~~~~ - Doesn't depend on an object of a class. This gives us a way to gain access to a method in a class without the need or creation an object first.
    static Static_Method() {
        pass
    }

    /// ~~~~~ Object Methods ~~~~~ - Working with objects of the class, often interacting with its attributes in some way
    Function_Name(){
        pass
    }        
}
    /// # -- Calling --
    /// # Object Creation:    const Object_Name = new Class_Name(First_Attribute, Second_Attribute, Third_Attribute);
    /// # Static Methods:     ClassName.StaticMethodName()
    /// # Object Method:      ObjectName.ObjectMethodName() 
    /// # Object Info:        ObjectName.Attribute
    
*/

// Character Example
class Character {

  constructor(First_Name, Last_Name, Species, Height, Gender) {
    this.First_Name = First_Name;
    this.Last_Name = Last_Name;
    this.Species = Species;
    this.Height = Height;
    this.Gender = Gender;
  }

  // ~~~~~ Static Methods ~~~~~ - Doesn't depend on an object of a class. This gives us a way to gain access to a method in a class without the need or creation an object first.
  static Class_Description() {
    return "This is a character class, you can make characters!";
  }

  // ~~~~~ Object Methods ~~~~~ - Working with objects of the class, often interacting with its attributes in some way
  Greeting1() {
    return `Hey! I am ${this.First_Name} and a ${this.Species}!`;
  }

  Greeting2({name, species}){
    return `Hey! I am ${name} and a ${species}!`;
  }

}

const Rufus = new Character("Rufus", "Cobber", "Kangaroo", "12'3", "Male");
console.log(Character.Class_Description())
console.log(Rufus.Greeting1())


// Backpack Example
class Backpack {

  // ~~~ Constructor ~~~
  constructor(Name, Volume, Color, PocketCount, StrapLength, DateGotten, Open, Storage) {
    this.Name = Name;
    this.Volume = Volume;
    this.Color = Color;
    this.PocketCount = PocketCount;
    this.StrapLength = StrapLength;
    this.DateGotten = DateGotten;
    this.Open = Open;
    this.Storage = Storage
  }

  // ~~~~~ Static Methods ~~~~~ 
  // None Yet!

  // ~~~~~ Object Methods ~~~~~
  Insert(Object) { this.Storage.push(Object) }
  Remove(Object) {

    // Find object's place in the stack
    let itemLocation = this.Storage.indexOf(Object)

    // Remove
    this.Storage.splice(itemLocation, 1)
  }

  Open_Backpack() { this.Open = true }
  Close_Backpack() { this.Open = false }

  Adjust_StrapLength(Length) { this.StrapLength = Length }

  CheckBackpackAge() {
    let Now = new Date();
    let DateGotten = new Date(this.DateGotten);
    let DaysSinceGotten = Math.floor((Now - DateGotten) / (1000 * 3600 * 24))

    return DaysSinceGotten
  }
};

let RufusPlush = {
  Name: "Rufus",
  Species: "Kangaroo",
  Gender: "Male",
}

let FionaPlush = {
  Name: "Fiona",
  Species: "Otter",
  Gender: "Female",
}

let KhanPlush = {
  Name: "Khan",
  Species: "Zebron",
  Gender: "Male",
}

// Object Creation
const StandardBackpack = new Backpack("Standard Backpack", 30, "Blue", 12, 22, Date(), false, [FionaPlush, KhanPlush]);

StandardBackpack.Insert(RufusPlush)
StandardBackpack.Insert(FionaPlush)
StandardBackpack.Insert(KhanPlush)

StandardBackpack.Remove(RufusPlush)

console.log(StandardBackpack)
const BackpackStats =
  `
    <main>
      <article>
        <h1>${StandardBackpack.Name}</h1>
        <ul>
          <li>Volume: ${StandardBackpack.Volume}</li>
          <li>Color: ${StandardBackpack.Color}</li>
          <li>Age: ${StandardBackpack.CheckBackpackAge()}</li>
          <li>Number of pockets: ${StandardBackpack.PocketCount}</li>
          <li>Current strap length: ${StandardBackpack.StrapLength}</li>
          <li>Backpack open? ${StandardBackpack.Open}</li>
        </ul>
      </article>
    </main>
  `;

document.querySelector(".Demo").innerHTML = BackpackStats // Inserting into a Demo container