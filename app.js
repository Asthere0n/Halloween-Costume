const sideButtons = document.querySelectorAll('.sideButton')
sideButtons.forEach((sideButton)=>{
    sideButton.addEventListener('click', ()=>{
        console.log('You are the best dev in the world')
        sideButtons.forEach(button => button.classList.remove('activated'))
        sideButton.classList.add('activated')
    })
})