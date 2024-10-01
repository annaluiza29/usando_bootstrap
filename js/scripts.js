document.addEventListener('DOMContentLoaded', ()=>{

    const form = document.querySelector('form');
    
    form.addEventListener('submit', async(event) =>{
    
    //previne comportamento padrão do formulário, que é recarregar
    event.preventDefault();
    
    //coletar valor dos campos
    const textValue = document.getElementById('text').value
    const emailValue = document.getElementById('email')?.value
    
    //criar objeto com os dados coletados no formulário
    const formData = {
    text: textValue,
    email: emailValue
    }
    
    const response = await fetch('https://www.exemplo.com/cadastro', {
    method: 'POST',
    headers:{
    'Content-type': 'application/json',
    },
    body: JSON.stringify(formData), //converte o objeto string em um json
    })
    
    })
    })