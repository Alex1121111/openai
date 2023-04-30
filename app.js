const API_KEY = "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"
async function fetchData(){
    const response = await fetch("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "hello"}]
        })
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
}
//fetchData()
