//var kullanımı
var serverName="kodluyoruz.org";
console.log(serverName);
//let kullanımı
let password="kodluyoruz123";
console.log(password);
//const kullanımı (degismez)
const SERVER_PASSWORD="12345";

let fullName="Berat Paban";

fullName="Lorem Ipsum Dolor";
console.log(fullName);

console.log(fullName+" Eklendi");

//Camel Case:
let kodluyoruzServerInfo="";

//Upper Case:

let NICKNAME="";
let FULL_NAME="";

//Matematiksel Islemler

let price=100;
let tax=0.18;
let priceTax=price*tax;
let totalPrice=price+priceTax;
console.log(
    "Fiyat:", price,
    "KDV Orani", tax, 
    "KDV Tutari:", priceTax, 
    "Toplam Fiyat:", totalPrice
    );

//artırma azaltma

let counter=320;
counter+=1;
console.log(counter);
counter++;
console.log(counter);
counter-=1;
console.log(counter);
counter--;
console.log(counter);
counter*=10;
console.log(counter);
counter/=10;
console.log(counter);

//islem onceligi
console.log(2+3*10);
console.log((2+3)*10);

//mod islemi(%)
console.log(14%2);

//us alma
console.log(2**2)//4

//asagi yuvarlama
console.log("Asagi Yuvarlama:", Math.floor(1.9))//1

//yukari yuvarlama
console.log("Yukari Yuvarlama:",Math.ceil(1.9))//2

//yakina yuvarlama
console.log("Yakina Yuvarlama:", Math.round(1.4))//1

//boolean
let isActive=false //0
isActive=true //1
console.log(isActive)

//veri turunu ogrenmek
console.log(typeof(price))
console.log(typeof(isActive))
console.log(typeof(fullName))

//string(metinsel) bilgilerini int ve float'a donusturme
let number1="11"
console.log("number1", parseInt(number1))

let number2="19px"
console.log("number2", parseInt(number2))

let number3="19.4px"
console.log("number2", parseFloat(number3))

//number veri tipinden string'e cevirme

let number4=55
number4=number4.toString()
console.log(number4, typeof(number4))


//Template Literals Kullanimi
let userName="berat"
const DOMAIN="paban.org"
let email=userName+"@"+DOMAIN
let info=`Merhaba ${userName} sitemize hosgeldin.. Mail Adresin: ${email}`;

console.log(info)

//String karakter Sayisi
console.log(email.length)

//Ilk Karakter bulma
console.log(userName[0])
console.log(userName.charAt(0))

//Buyuk/Kucuk Harf Yapmak
console.log(userName.toUpperCase())//buyuk
console.log(userName.toLowerCase())//kucuk
