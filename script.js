const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const secretMsg = document.getElementById('secret msg')

form.addEventListener('submit', (e) =>  {
    let messages = []
    let secretMsge = []
    if (password.value === '' || password.value  == null) {
        messages.push('Wprowadź hasło!')
    }
    if (password.value === 'zuki') {
        document.getElementById('error').class='Correct'
        messages.push('hasło poprawne!\nMagiczne treście zostały odkryte!')
        secretMsge.push('Ogólnie Pan Roman to taki sławny jutuber i nauczyciel\n I bardzo go polecam\n link do jego kanału na jutubie:\n')
        document.getElementById('link').href='https://www.youtube.com/channel/UCsIFGUOpW_eldWqdFOuCDnw'
        document.getElementById('error').style='color: lightblue; border: 5px outset #017a22; background-color: #09b036'
    } else {
        messages.push('haslo jest niepoprawne! :(')
        secretMsge.push('Podałeś niepoprawne hasło lub wcale go nie podałeś....\n Lepiej nie klikaj w link na dole ponieważ może być on niebiezpieczny dla twoich oczu')
        document.getElementById('link').href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        document.getElementById('error').style=' color:#ff9e7a; border: 5px outset #850000; background-color: #b81212'
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        secretMsg.innerText = secretMsge.join(', ')
    }
})