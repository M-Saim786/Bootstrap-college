const toTop = document.querySelector('.top')
window.addEventListener('scroll' ,() => {
if(window.pageYOffset>100)
{
    toTop.classList.add('active')
}
else
{
    toTop.classList.remove('active')
}
})


const login =()=>
{
    var username=document.getElementById('email').value
    var password=document.getElementById('password').value
if(username=='admin' && password=='123')
{
    alert('Sucess')
}
else
{
    alert('Login Failed')
}
}


var popUp = document.getElementById('popUp')
// console.log(popUp)
setTimeout(() => {
    popUp.setAttribute('style',`display:block;
     transition:all 0.6s`)
}, 1000);
// setTimeout(() => {
//     popUp.setAttribute('style',`display:none`)
// }, 3000);

var closebtn = document.getElementById('close')
closebtn.addEventListener('click' ,() =>{
    popUp.setAttribute("style" , " display:none")
    // console.log('click')
})


var exampleModal  =document.getElementById('exampleModal')


var logClose = document.getElementsByClassName('logClose')
// console.log(logClose[0])
logClose[0].addEventListener('click' ,() =>{
    exampleModal.setAttribute('style' , 'display : none')
})