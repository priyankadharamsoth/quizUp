import React, {useState} from 'react'

const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);

  return (
    <div className='questionBox'>
        <div className='question'>{question}</div>
        {answer.map((text, index) => (
          // <button key= {index} className="answerBtn">{}</button>
          <label>
              <input
                type="radio"
                value={answer.answers}
                name={question}
                onClick={() => {
                  setAnswer([text]); 
                  selected(text);
                }}
              />
              &nbsp;
              {text} <br />
          </label>
        ))}
      
    </div>
  )
}

export default QuestionBox
