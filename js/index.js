let element = document.createElement('div')
let ul = document.createElement('ul')

for (let i = 0; i<3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i+1).toString()
  ul.appendChild(li)
}

ul.style.textAlign = 'left'
ul.removeChild(ul.querySelector('li:nth-child(2)'))


element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = '#f9f9f9'
element.style.textAligh = 'center'
element.appendChild(ul)

document.body.appendChild(element)

ul.remove()
