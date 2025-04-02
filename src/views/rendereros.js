// capturar o foco na busca pelo nome do cliente
// a constante foco obtem o elemento html (input) identificado como 'inputSearchClientOs'
const foco = document.getElementById('inputSearchClientOs')

// Iniciar a janela de clientes alterando as propriedades de alguns elementos
document.addEventListener('DOMContentLoaded', () => {
    // Desativar os botões
    btnUpdate.disabled = true
    btnDelete.disabled = true
    // Foco na busca do cliente
    foco.focus()
})
//captura dos dados dos inputs do formulário
let 