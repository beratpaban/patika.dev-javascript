//fonksiyon tanımlama
function hello(){
    console.log("Merhaba")
}

hello()//calistirma

//parametreli fonksiyon tanımlama

let firstName="Berat"
function greetings(firstName){
    console.log(`Merhaba ${firstName}`)
}

greetings(firstName)

// fat arrow =>
const helloFuncV1 =(firstName)=> {console.log(`Merhaba ${firstName}`)}
helloFuncV1(firstName)


let greeting =document.querySelector("#greeting")
greeting.addEventListener("click",function(){
    console.log("Tıklandı")
})
greeting.addEventListener("mouseover",domClick)
function domClick(){
    console.log("Tıklandı")
    this.style.color == "red"? this.style.color == "black" : this.style.color = "red"
}