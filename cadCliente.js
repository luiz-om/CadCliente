let CLIENTES = []
let id = 0
let pegaCampo = (id) => {
    return document.getElementById(id)
}
let salvar = () => {

    let nameInput = pegaCampo('name').value
    let telefoneInput = pegaCampo('telefone').value
    let cpfInput = pegaCampo('cpf').value
    id++
    //  let campos = [nameInput, telefoneInput]

    /*     for (let index = 0; index < campos.length; index++) {
            const element = campos[index];
            if (!element) {
                alert(`Preencha o campo ${element.label}`)
                console.log(element)
                return
            }
            
        } */
    const nameField = {
        value: nameInput,
        label: 'nome'
    }
    const telefoneField = {
        value: telefoneInput,
        label: 'telefone'
    }
    const cpfField = {
        value: cpfInput,
        label: 'cpf'
    }
    let campos = [nameField, telefoneField, cpfField]
    campos.forEach((field) => {
        //console.log(field);
        const { value } = field
        if (!value) {


            alert(`Preencha o campo ${field.label}`)
            console.log(field)
            return
        }
    })

    for (let index = 0; index < campos.length; index++) {
        const element = campos[index];

        const { value } = element
        if (!value) {
            alert(`Preencha o campo ${element.label}`)
            console.log(element)
            return
        }

    }

    const clientes = {
        id: id,
        name: nameInput,
        cpf: cpfInput,
        telefone: telefoneInput
    }
    let campo = pegaCampo('res')
    campo.innerHTML = ''
    //salvar dados no Array
    CLIENTES.push(clientes)

    for (let index = 0; index < CLIENTES.length; index++) {
        debugger
        //intera array para exibir dados na tela
        const Cliente = CLIENTES[index];
        //  console.log(Cliente);
        campo.innerHTML += `<div id='telaDados'>Nome: ${Cliente.name} - Telefone:
                 ${Cliente.telefone} <input id='btnexcluir' type="button" value='Excluir'> </div>`
    }





}
