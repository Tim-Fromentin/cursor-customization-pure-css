const cursor = document.querySelector('#cursor')
document.addEventListener('mousemove', cursorAnimation)

function cursorAnimation(e){
    let x = e.clientX
    let y = e.clientY
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
}
cursor.addEventListener('click', clickPulse)
function clickPulse(){
    cursor.classList.add('click_pulse--anim')

    setTimeout(() => {
        console.log("Action après 2 secondes");
    cursor.classList.remove('click_pulse--anim')
      }, 450);
}