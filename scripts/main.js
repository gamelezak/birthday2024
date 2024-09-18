let text1 = 'Счастливого   Дня   Рождения!!!'
let text2 = 'Счастья здоровья и всего самого наилучшего'
let content = document.querySelector('#content')

for (let i in [...text1]) {
  let letter = document.createElement('em')
  letter.textContent = [...text1][i]
  if(letter.textContent.match(/\s/)) {
    letter.style.margin = 'auto 3px'
    letter.style.textAlign = 'center'
    
  }
  letter.style.animationDelay = i/15+'s'
  content.appendChild(letter)
}
