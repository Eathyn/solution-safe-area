const container = document.querySelector('.container')

for (let i = 0; i < 100; i++) {
  const item = document.createElement('div')
  item.innerText = `${i}`
  item.setAttribute('class', 'item')
  container.append(item)
}
