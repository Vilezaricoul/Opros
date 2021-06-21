import React, { useState } from 'react';
import './App.css';

function App() {
    const question = [{
            questionText: 'Кто я?',
            answerOptions: [
                { answerText: 'Марсианин', isCorrect: false },
                { answerText: 'Бот', isCorrect: false },
                { answerText: 'Человек', isCorrect: true },
                { answerText: 'Макаранный монстр', isCorrect: false }
            ]
        },
        {
            questionText: 'Сколько я изучаю javascript?',
            answerOptions: [
                { answerText: '2 года', isCorrect: false },
                { answerText: '1 год', isCorrect: true },
                { answerText: '1 день', isCorrect: false },
                { answerText: 'родился Js разрабом', isCorrect: false }
            ]
        },
        {
            questionText: 'В чем сила?',
            answerOptions: [
                { answerText: 'В пельменях', isCorrect: true },
                { answerText: 'В аниме', isCorrect: false },
                { answerText: 'В деньгах', isCorrect: false },
                { answerText: 'В силе', isCorrect: false }
            ]
        },
        {
            questionText: 'Как долго я изучаю реакт',
            answerOptions: [
                { answerText: '1 год', isCorrect: false },
                { answerText: 'пол года', isCorrect: false },
                { answerText: 'месяц', isCorrect: false },
                { answerText: '2 дня', isCorrect: true }
            ]
        },

    ]





    const [correntQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)




    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = correntQuestion + 1
        if (nextQuestion < question.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }
    return(    
      <div className="app">

          { showScore ?
          <div className="section__score">
              <div>Правильные ответы {score} из {question.length}</div>
          </div>
          :
          <div className="quizz">
              <div className="question__section">
                  <div className="question__count">
                      <span>№{correntQuestion +1}</span>
                  </div>
                  <div className="question__text">{question[correntQuestion].questionText}</div>
              </div>
              <div className="answer__section">
                  {question[correntQuestion].answerOptions.map(item => (
                  <button onClick={()=> handleAnswerOptionClick(item.isCorrect)}>
                      {item.answerText}</button>))}
              </div>
          </div>
           }
       </div>
    );
}

export default App