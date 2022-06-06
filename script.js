

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

    let nordeste = [
        id = 21,22,23,24,25,26,27,28,29,
        sigla = 'MA','PI','CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA',
        nome = 'Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia' 
    ];

    let sudeste = [
        id = 31,32,33,35,
        sigla = 'MG', 'ES', 'RJ', 'SP',
        nome = 'Minas Gerais', 'Espiríto Santo', 'Rio De Janeiro', 'São Paulo'
    ];

    let sul = [
        id = 41, 42, 43,
        sigla = 'PR', 'SC', 'RS',
        nome = 'Paraná', 'Santa Catarina', 'Rio Grande Do Sul'
    ];

    let centroOeste = [
        id = 50,51, 52, 53,
        sigla = 'MS', 'MT', 'GO', 'DF',
        nome = 'Mata Grosso Do Sul', 'Mato Grosso', 'Goiás', 'Distrito Federal'
    ]

    console.log(informacoes)
    console.log(norte[0]-4)
    //document.write('Norte: ', norte[0]-4)
    //document.write('Nordeste: ', nordeste[0]-12)

    document.getElementById('norte').innerText = 'Norte'
    document.getElementById('qtdN').innerText = norte[0]-4

    document.getElementById('nordeste').innerText = 'Nordeste'
    document.getElementById('qtdNN').innerText = nordeste[0]-12

    document.getElementById('sudeste').innerText = 'Sudeste'
    document.getElementById('qtdS').innerText = sudeste[0]-27

    document.getElementById('sul').innerText = 'Sul'
    document.getElementById('qtdSS').innerText = sul[0]-38

    document.getElementById('centro').innerText = 'Centro-Oeste'
    document.getElementById('qtdC').innerText = centroOeste[0]-46
}

main();
