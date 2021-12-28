
const startBtn = document.querySelector('.start')
const answers = ['Да', 'Нет', 'Возможно', 'Спроси еще раз', 'Плохая идея', 'Может быть', 
'Конечно нет', 'Есть хороший шанс',
 'Вполне вероятно', 'Пфф, ерунда', 'Задай вопрос по другому', 'Уверен на 99%', 'Ни в коем случае', 'Абсолютно точно' ]

startBtn.addEventListener('click', () =>{
    let answer = answers[Math.floor(Math.random() * answers.length)]
    startBtn.innerHTML = answer
})
