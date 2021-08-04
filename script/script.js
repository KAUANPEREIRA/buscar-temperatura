// observando pagina com o addEventListener para quando houver um submit
//preventDefault previni o comportamento padrão do formulário
//https:// essencial na hora de fazer a requisisção// encodeUri == transformar na sintaxe de url
//sempre bom olhar na documentação da api ,para passar de maneira correta os dados
// requsições quando retornam 200 é que esta ok

document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault()
    let campoBusca = document.querySelector('#searchInput').value 

    if (campoBusca !=''){
        mostrarAviso('Carregando ...')
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(campoBusca)}&appid=dfbaaca284d2b38ae3eed28540b65819&units=metric&lang=pt_br
            `
        let resultado = await fetch(url) 
        let json = resultado.json() 
        console.log(json)  
        
        if(json === 200){

        }else{
            mostrarAviso('Localidade não encontrada !')
        }
    }

    console.log(campoBusca)
})

function mostrarAviso(msg){
    document.querySelector('.aviso').innerHTML =msg
}