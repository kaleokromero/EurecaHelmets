document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const telefone = document.getElementById('telefone').value
        const motivo = document.getElementById('motivo').value
        const mensagem = document.getElementById('Mensagem').value

        if (!nome || !email || !telefone || !motivo || !mensagem) {
            window.alert('É necessário preencher todos os campos')
            return
        }

        if(nome.length < 2) {
            window.alert('Nome deve possuir pelo menos 2 caracteres')
            return
        }

        const telefoneValidator = /^\(?\d{2}\)?\s?9\d{4}[-\s]?\d{4}$/;

        if(!telefoneValidator.test(telefone)){
            window.alert('Favor inserir formato válido de telefone')
            return
        }

        const formData = { nome, email, telefone, motivo, mensagem }
        localStorage.setItem('formDetails', JSON.stringify(formData))

        window.alert('Dados salvos com sucesso!')
        form.reset()
        window.location.href = 'file:///C:/Users/kaleo/puc/fundamentoProgWeb1/formAction.html'
    })
})