//FORM SUBMIT

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)
let alertDOM=document.querySelector('#alert')

const ALERT=`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formSubmit(event){
    event.preventDefault()//default işlemi engelledik...
    console.log("İşlem Gerçekleşti")
    let scoreInputDOM=document.querySelector('#score') //Input içindeki değeri almak
    console.log(scoreInputDOM.value)
    localStorage.setItem('score',scoreInputDOM.value)//veriyi localstorage a attık
}


//Bolum Sonu Egzersizi

let userForm =document.querySelector('#userForm')
userForm.addEventListener('submit',formHandler)

function formHandler(event){
    event.preventDefault()
    const USER_NAME=document.querySelector('#username')
    const SCORE=document.querySelector('#score')
    if(USER_NAME.value&&SCORE.value){
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value=""//gönderdikten sonra sıfırlar
        SCORE.value=""
    }else{
        alertDOM.innerHTML=ALERT

    }
}



let userListDOM=document.querySelector('#userList')
const addItem = (userName, score)=>{
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add('list-group-item' ,'d-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}