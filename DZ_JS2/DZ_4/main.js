const button = document.querySelector('.btn')
const hokagesInfo = document.querySelector('.hokages')

button.addEventListener('click', ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "peoples.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()

    request.addEventListener('load', ()=>{
        const hokages = JSON.parse(request.response)
        hokages.forEach((person)=>{
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `
                <img src="${person.image}" alt="${person.name}">
                 <h3>Name: ${person.name}</h3>
                 <h4>Hokage number: ${person.number}</h4>
                <span>Abilities: ${person.abilities}</span>
            `
            hokagesInfo.append(div)
        })
    })
})

//2 task
const message = new XMLHttpRequest()
message.open("GET", "data.json")
message.responseType = 'json'

message.onload = ()=>{
    if (message.status === 200) {
        const jsonData = message.response;
        console.log(jsonData);
    }
}
message.send()