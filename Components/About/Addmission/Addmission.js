// function ResetFunc() {

// document.getElementById('reset').reset();
// }

function fun(){  
    document.getElementById("form").reset();  
  }   

// const toTop = document.querySelector(".top")
// window.addEventListener('scroll' ,() => {
//     if(window.pageYOffset > 100){
//         toTop.classList.add("active")
//     }
//     else{
//         toTop.classList.remove("active")
//     }
// })

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