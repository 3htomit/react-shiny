import { useParams, Link } from 'react-router-dom'
import '../style/Survey.scss'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const previousQuestion = questionNumberInt - 1
  const nextQuestion = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <div className="shiny-survey-num">
        {questionNumberInt === 1 ? null : (
          <Link to={`/survey/${previousQuestion}`}>Précédent</Link>
        )}

        <h2>Question {questionNumber}</h2>

        {questionNumberInt === 10 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
        )}
      </div>
    </div>
  )
}

export default Survey
