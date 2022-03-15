const showToggle = document.querySelectorAll('.share');

showToggle[0].addEventListener('click', () =>{
    document.querySelector('.share__icons').classList.toggle('active')
})

showToggle[1].addEventListener('click', () =>{
    document.querySelector('.share__icons').classList.remove('active')
})