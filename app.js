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
console.log(popUp)
setTimeout(() => {
    popUp.setAttribute('style',`display:block;
     transition:all 0.6s`)
}, 1000);
// setTimeout(() => {
//     popUp.setAttribute('style',`display:none`)
// }, 3000);