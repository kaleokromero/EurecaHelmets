const formInfo = JSON.parse(localStorage.getItem('formDetails'))

function getInformation() {
    const list = document.querySelector('ul')
    Object.entries(formInfo).forEach(([key,value]) => {
        const listItem = document.createElement('li')
        listItem.textContent = `${key}: ${value}`
        list.appendChild(listItem)
    })
    
}