let CLIENTES = []
let id = 0
let pegaCampo = (id) => {
    return document.getElementById(id)
}
let salvar = () => {
    id++
    const clientes = {
        id: id,
        name: 'nameInput',
        telefone: 'telefoneInput'
    }
    let campo = pegaCampo('res')
    campo.innerHTML = ''
    //salvar dados no Array
    CLIENTES.push(clientes)

    for (let index = 0; index < CLIENTES.length; index++) {

        const Cliente = CLIENTES[index];
        console.log(Cliente);
        campo.innerHTML += `<div>Nome: ${Cliente.name} - Telefone:
         ${Cliente.telefone} <input id='btnexcluir' type="button" value='Excluir'> </div>`

    }
}


90