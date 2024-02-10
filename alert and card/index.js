// let ksfdjdsgkl=document.querySelector('#devi')


// let div=document.createElement('div')//<div></div>
// div.className='card'
// let p=document.createElement('p')
// p.innerText='Login Success full'
// let btn=document.createElement('button')
// btn.id='btn'
// btn.innerText='X'
// div.append(p,btn)
// devi.append(div)


// login.addEventListener('click',showNotification)

function showNotification(message, color , top , right) {
    let div = document.createElement('div')//<div></div>
    div.className = 'card'
    div.style.borderBottom = `5px solid ${color}`
    div.style.top = `${top}rem`
    div.style.right = `${right}rem`
    let p = document.createElement('p')
    p.innerText = message
    let btn = document.createElement('button')
    btn.id = 'btn'
    btn.innerText = 'X'
    div.append(p, btn)
    devi.append(div)
}

login.addEventListener('click', () => {
    if (email.value == '' || password.value == '') {
        showNotification('provide value', 'red',23)
    } else {
        showNotification('login successful', 'green',23)
    }
})






