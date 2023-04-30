const API_KEY = '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';
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')

function changeInput(value){
    const inputElement = document.querySelector('input')
    inputElement.value = value
}
async function getmessage(){
    console.log("clicked")
    const options = {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${API_KEY}`
        },
        body:JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": inputElement.value}]
        })
    }
    try{
        console.log(options)
        const response = await fetch('https://api.openai.com/v1/chat/completions',options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content && inputElement.value){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click', () => changeInput(pElement.textContent))
            historyElement.appendChild(pElement)
        }
    }
    catch(error){
        console.error(error)
    }
}
submitButton.addEventListener('click',getmessage)
function clearInput(){
    inputElement.value = ''
}
buttonElement.addEventListener('click',clearInput)