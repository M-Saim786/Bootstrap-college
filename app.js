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