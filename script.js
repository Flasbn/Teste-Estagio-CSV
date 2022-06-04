function jsonUrl(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    
    return request.responseText
}


function main (){
    let dados = jsonUrl("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
    let informacoes = JSON.parse(dados);
    
    let norte = [
        id = 11,12,13,14,15,16,17,
        sigla = 'RO','AC','AM', 'RR', 'PA', 'AP', 'TO',
        nome = 'Rondônia', 'Acre', 'Amazonas', 'Roraima', 'Pará', 'Amapá', 'Tocantins',

    ];

    console.log(informacoes)
    console.log(norte[0]-4)
    document.write('Norte: ', norte[0]-4)

}

main();