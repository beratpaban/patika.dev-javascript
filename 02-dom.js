
//pathname
console.log(document.URL)

// console.log(document.head)
// console.log(document.body)
// document.body.style.backgroundColor="blue"

//oge secimi
let title= document.getElementById('title')
console.log(title.innerHTML)

let link=document.querySelector("ul>li>a")
console.log(link.innerHTML)

//kullanicidan veri almak
// let fullName=prompt("Lütfen Adınızı Giriniz")
let fullName="Berat"
 console.log(fullName)
let greeting=document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${fullName}</small>`

//liste içindeki son elemana ulaşmak 
let lastItem =document.querySelector("ul#list>li:last-child")
console.log(lastItem)

//liste içindeki ilk elemana ulaşmak 
let firstItem =document.querySelector("ul#list>li:first-child")
console.log(firstItem)

//liste içindeki ilk elemana ulaşmak 
let firstItemInner =document.querySelector("ul#list>li:first-child").innerHTML="Degisti"
console.log(firstItemInner)

//sona eleman eklemek
let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement('li')
liDOM.innerHTML="JavaScript Tarafından Oluşturuldu ve Sona Eklendi"
ulDOM.append(liDOM)

//başa eleman eklemek
let ulDOM2=document.querySelector("ul#list")
let liDOM2=document.createElement('li')
liDOM2.innerHTML="JavaScript Tarafından Oluşturuldu ve Başa Eklendi"
ulDOM2.prepend(liDOM2)

//css class eklemek ve çıkartmak

greeting.classList.add("text-primary")
greeting.classList.add("new-info")
greeting.classList.remove("new-info")
console.log(greeting.classList)