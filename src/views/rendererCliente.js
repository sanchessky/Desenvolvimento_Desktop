// busca de CEP
function buscarCEP(){
        //console.log("Teste do evento blur")
        let cep = document.getElementById('inputCEPClient').value
        // console.log(cep) teste de recebimento
        //"consumir" a API do via cep
        let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
        // acessamdo o web service para obter os dados
        fetch(urlAPI)
            .then(response => response.json())
            .then(dados => {
                //extração dos dados
                document.getElementById('inputAddressClient').value = dados.logradouro
                document.getElementById('inputNeighborhoodClient').value = dados.bairro
                document.getElementById('inputCityClient').value = dados.localidade
                document.getElementById('inputUFClient').value = dados.uf
               
            })
            .catch(error => console.log(error))
    }
