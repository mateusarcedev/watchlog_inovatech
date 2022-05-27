btn = document.querySelector('#submit')

btn.addEventListener('click', function(e) {

    e.preventDefault();

    document.getElementById('titulo').innerHTML = document.getElementById('title').value;;
    document.getElementById('image').src = document.getElementById('formFile').value;
    document.getElementById('mensagem').innerHTML = document.getElementById('comment').value;;
})

