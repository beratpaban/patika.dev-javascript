//Array Oluşturmak
let domain="paban.org"
let isActive=false
let items=[1,2,3,isActive,domain]
console.log(items)

let emptyArray=[]//boş liste

//Array içindeki eleman sayısına ulaşmak
console.log(items.length)//eleman sayısına ulaşmak

//ilk elemanı çağırmak
console.log(items[0])

//son elemanı çağırmak
console.log(items[items.length-1])

//ortadaki elemanı çağırmak
console.log(items[Math.floor( items.length/2)])

let items2=[10,20,30,40,]
console.log('items2 - ilk hali : ',items2)

// Sona eleman ekle --> push
items2.push(50)
console.log('items2 - sona eleman eklenmiş hali : ',items2)

// Basa eleman ekle --> unshift
items2.unshift(5)
console.log('items2 - başa eleman eklenmiş hali : ',items2)

// Sondaki eleman cikarmak --> pop
items2.pop()
console.log('items2 - sondaki elemanın çıkartılmış hali : ',items2)

// Basdaki eleman cikarmak --> shift
items2.shift()
console.log('items2 - baştaki elemanın çıkartılmış hali : ',items2)

// Array içindeki bir ogenşn bilgisinin güncellenmesi
items2[0]=100
console.log('items2 - 0. indeksdeki verinin güncellenmesi : ',items2)


