// observando pagina com o addEventListener para quando houver um submit
//preventDefault previni o comportamento padrão do formulário
//https:// essencial na hora de fazer a requisisção// encodeUri == transformar na sintaxe de url
//sempre bom olhar na documentação da api ,para passar de maneira correta os dados
// requsições quando retornam 200 é que esta ok

document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault()
    let campoBusca = document.querySelector('#searchInput').value 

    if (campoBusca !=''){
        limparInfo()
        mostrarAviso('Carregando ...')
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(campoBusca)}&appid=dfbaaca284d2b38ae3eed28540b65819&units=metric&lang=pt_br
            `
        let resultado = await fetch(url) 
        let json =  await resultado.json() 
        console.log(json)  
        
        if(json.cod === 200){
            mostrarInfo({//objeto para exibir informações
                nome:json.name,
                pais:json.sys.country,
                temperatura: json.main.temp,
                iconeTemperatura:json.weather[0].icon,
                velocidade: json.wind.speed,
                angulo: json.wind.deg

            })

        }else{
            limparInfo()
            mostrarAviso('Localidade não encontrada !')
        }
    }

    console.log(campoBusca)
})

function limparInfo(){
    mostrarAviso('')
    document.querySelector('.resultado').style.display='none'

}

function mostrarInfo(json){
    mostrarAviso('')
    document.querySelector('.resultado').style.display='block'
    document.querySelector('.titulo').innerHTML=`${json.nome}, ${json.pais}`//o json na template referencia ao json estanciado no obj MostrarInfo()
    document.querySelector('.tempInfo').innerHTML=`${json.temperatura}<sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML=`${json.velocidade}<span>km/h</span>`

    document.querySelector('.temp img ').setAttribute('src',`http://openweathermap.org/img/wn/${json.iconeTemperatura}@2x.png`)
    document.querySelector('.ventoPonto').style.transform =`rotate(${json.angulo}deg)`
}

function mostrarAviso(msg){
    document.querySelector('.aviso').innerHTML =msg
}