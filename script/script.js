// observando pagina com o addEventListener para quando houver um submit
//preventDefault previni o comportamento padrão do formulário

document.querySelector('.busca').addEventListener('submit',(event)=>{
    event.preventDefault()
    let campoBusca = document.querySelector('#searchInput').value 

    if (campoBusca ==''){
        campoBusca = 'insira algo valido'
        alert('campo vazio ')
    }

    console.log(campoBusca)
})