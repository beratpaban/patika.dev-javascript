//object 

let arrObj=[1,2,3]
let object1={obj:1}

console.log("arrObj",typeof(arrObj))
console.log("object1",typeof(object1))
console.log("object1",object1)

let item1=new Object()
let item2={}

console.log("item1",typeof(item1))
console.log("item2",typeof(item2))

let item3={}
let item4=new Object()

// Object Key - Value

let laptop1={
    brand:"Apple",
    model:"MacBook Pro",
    "2kg": 2
}

console.log(laptop1)
console.log(laptop1.brand)
console.log(laptop1.model)

var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};

console.log(person.introduce())

