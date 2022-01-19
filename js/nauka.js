const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 200){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})