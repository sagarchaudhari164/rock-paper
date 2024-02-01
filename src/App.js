import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)

  const handleChoice = choice => {
    setUserChoice(choice)
    generateOpponentChoice()
  }

  const generateOpponentChoice = () => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    setOpponentChoice(choicesList[randomIndex])
    determineWinner()
  }

  const determineWinner = () => {
    // Implement logic to determine the winner and update the score
    // Hint: Use userChoice and opponentChoice to compare choices
    // Update setScore based on the game result
  }

  const resetGame = () => {
    setUserChoice(null)
    setOpponentChoice(null)
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <p>Score: {score}</p>

      {/* Buttons with data-testid attributes */}
      <button
        data-testid="rockButton"
        onClick={() => handleChoice(choicesList[0])}
      >
        <img src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </button>
      <button
        data-testid="paperButton"
        onClick={() => handleChoice(choicesList[2])}
      >
        <img src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </button>
      <button
        data-testid="scissorsButton"
        onClick={() => handleChoice(choicesList[1])}
      >
        <img src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </button>

      {/* Rules Popup */}
      <Popup
        trigger={<button>Rules</button>}
        modal
        nested
        contentStyle={{backgroundColor: '#ffffff', padding: '20px'}}
      >
        {close => (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
            <button onClick={close}>
              <RiCloseLine />
            </button>
          </>
        )}
      </Popup>

      {/* Game Results View */}
      {userChoice && opponentChoice && (
        <div>
          {/* Display user's and opponent's choices */}
          <img src={userChoice.imageUrl} alt="your choice" />
          <img src={opponentChoice.imageUrl} alt="opponent choice" />

          {/* Display result and Play Again button */}
          {/* Logic to display result */}
          <p>{/* Implement logic to display result */}</p>
          <button onClick={resetGame}>PLAY AGAIN</button>
        </div>
      )}
    </div>
  )
}

export default App
