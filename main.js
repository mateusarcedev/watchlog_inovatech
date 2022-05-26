btn = document.querySelector("#submit")

btn.addEventListener('click', function(e) {
    e.preventDefault();

    const login = document.querySelector("#login")
    const loginValue = login.value;

    const password = document.querySelector("#password")
    const passwordValue = password.value;

    if(loginValue == 123 && passwordValue == 'fametro2022') {
        window.location.href = 'home.html';
    } else {
        
        alert('Dados incorretos!')
        document.location.reload(true)
    }

})