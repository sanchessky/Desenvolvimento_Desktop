// ==================================================
// == Busca avançada - estilo Google ================

// capturar os id referente ao campo do nome
const input = document.getElementById('inputSearchClient')
// capturar o id do ul da lista de sugestões de clientes
const suggestionList = document.getElementById('viewListSuggestion')
// capturar os campos que vão ser preenchidos
let idClient = document.getElementById('inputIdClient')
let nameClient = document.getElementById('inputNameClient')
let phoneClient = document.getElementById('inputPhoneClient')

// vetor usado na manipulação (filtragem) dos dados
let arrayClients = []

// captura em tempo real do input (digitação de caracteres na caixa de busca)
input.addEventListener('input', () => {
    // Passo 1: capturar o que for digitado na caixa de busca e converter tudo para letras minúsculas (auxilio ao filtro)
    const search = input.value.toLowerCase()
    //console.log(search) // teste de apoio a lógica
    // Passo 2: Enviar ao main um pedido de busca de clientes pelo nome (via preload - api )
    api.searchClients()

    // Recebimento dos clientes do banco de dados (passo 3)
    api.listClients((event, clients) => {
        // console.log(clients) // teste do passo 3
        // converter para JSON os dados dos clientes recebidos
        const dataClients = JSON.parse(clients)
        // armazenar no vetor os dados dos clientes
        arrayClients = dataClients
        // Passo 4: Filtrar os dados dos clientes extraindo nomes que tenham relação com os caracteres digitados na busca em tempo real
        const results = arrayClients.filter(c =>
            c.nomeCliente && c.nomeCliente.toLowerCase().includes(search)
        ).slice(0, 10) //máximo 10 resultados
        //console.log(results) // IMPORTANTE para o entendimento
        // Limpar a lista a cada caractere digitado
        suggestionList.innerHTML = ""
        // Para cada resultado gerar um ítem da lista <li>
        results.forEach(c => {
            // criar o elemento li
            const item = document.createElement('li')
            // adicionar classes bootstrap a cada li criado
            item.classList.add('list-group-item', 'list-group-item-action')
            // exibir o nome do cliente
            item.textContent = c.nomeCliente

            // adicionar os li s criados a lista ul
            suggestionList.appendChild(item)

            // adicionar um evento de clique no item da lista para preencher os campos do formulário
            item.addEventListener('click', () => {
                idClient.value = c._id
                nameClient.value = c.nomeCliente
                phoneClient.value = c.foneCliente
                // limpar o input e recolher a lista
                input.value = ""
                suggestionList.innerHTML = ""
            })
        })
    })
})

// Ocultar a lista ao clicar fora
document.addEventListener('click', (event) => {
    // ocultar a lista se ela existir e estiver ativa
    if (!input.contains(event.target) && !suggestionList.contains(event.target)) {
        suggestionList.innerHTML = ""
    }
})

// == Fim - busca avançada ==========================
// ==================================================


// ==================================================
// == Buscar OS =====================================

function inputOS() {
    //console.log("teste do botão Buscar OS")
    api.searchOS()
}

// == Fim - Buscar OS ===============================
// ==================================================

function resetForm() {
    location.reload()
}