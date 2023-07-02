// == eşitse
let price=100
console.log(price==1) //false

// === hem değeri hem türü eşitse
console.log(price===100)//true
console.log(price==="100")//false

// != eşit değilse
console.log(price!=100)//false
console.log(price!=10)//true

// < küçükse
console.log(price<1000)//true
console.log(price<10)//false

// <= küçük veya eşitse
console.log(price<=100)//true
console.log(price<=120)//true

// > büyükse
console.log(price>100)//false
console.log(price>101)//false
console.log(price>99)//true

//  >= büyük veya eşitse
console.log(price>=100)//true
console.log(price>=5)//true
console.log(price>=120)//false

// && ve
console.log(price==100 && price<120)//true
console.log(price==100 && price>120)//false

// || veya
console.log(price==100 || price<120)//true
console.log(price==100 || price>120)//true
console.log(price==90 || price>120)//false


// ! değil
console.log(!(price==100) && price<120)//false


console.clear()

// if else
let userName="Berat"
let age=23

if(userName.length>0){
    console.log(`Kullanici bilginiz ${userName}`)
}
else{
    console.log("Bilgi Yok")
}

if(userName&&age>=18){
    console.log("Ehliyet alabilirsiniz")
}else if(!userName){
    console.log("Kullanici yok")
}else if(!(age>=18)){
    console.log("Yaşınız 18'den küçük ya da belirtilmemiştir")
}


