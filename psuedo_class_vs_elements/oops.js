//!encapsulation


function Person(name, age) {
    let _name = name; // private property
    let _age = age; // private property
    
    this.getName = function() { // public method
      return _name;
    }
    
    this.getAge = function() { // public method
      return _age;
    }
  }
  
//   const person = new Person('John', 30);
//   console.log(person.getName()); // outputs: "John"
//   console.log(person.getAge()); // outputs: 30


  //!abstraction

  function person(name,age){
    this.name=name
    this.age=age
    const address= "address"
    const findAddress=function(){
        console.log(address)
    }
    this.getAddress=function(){
        console.log(name,age)
        findAddress()
    }
  }
  const p=new person("Prabal",100)
  p.getAddress()//"address"


  //!inheritance

  class car{
constructor(speed){
    this.speed= speed
}
drive(){
    console.log(`this vehicle is ${this.speed}`)
}
  }

  class bike extends car{

  }

  let moto=new bike("fast")

  moto.drive()


  //! polimorphism

  class firstClass {

    add() {

        console.log("First Method")

    }

}

class secondClass extends firstClass {

    add() {

        console.log(30 + 40);

    }

}

class thirdClass extends secondClass {

    add() {

        console.log("Last Method")

    }

}

var ob = new firstClass();

var ob2 = new secondClass();

var ob3 = new thirdClass();

ob.add();//First Method

ob2.add();//70

ob3.add();//Last Method




