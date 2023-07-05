let users=["Lorem","Ipsum","Dolor,"]

// for(let index=0;index<10;index++){
//     console.log(index)
// }

let index=0;

const userListDOM=document.querySelector('#userList')

for(;index<users.length;index++){
    const liDOM=document.createElement('li')
    liDOM.innerHTML=users[index]
    userListDOM.append(liDOM)
}

//Break Continue
const LOREM_LIST=['lorem','ipsum','dolor','amet','consectetur','adipisicing','elit',]

let counter=0

for(;counter<10;counter++){
    if(counter==5){break}
    console.log(counter)
}
const UL_DOM=document.querySelector('#userList')
let index2=0

for(;index2<LOREM_LIST.length;index2++){
    if(LOREM_LIST[index2]=="dolor"){break}
    let LI_DOM=document.createElement('li')
    LI_DOM.innerHTML=LOREM_LIST[index2]
    UL_DOM.append(LI_DOM)

}

//while
while(counter<10){
    console.log(counter)
    counter++
}

//foreach
const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});