
import React, { useState} from "react";
import './App.css';


function App() {

  // properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the last book of the bible?",
      options: [
        { id: 0, text: "Ruth", isCorrect: false },
        { id: 1, text: "Malachi", isCorrect: false },
        { id: 2, text: "Jude", isCorrect: false },
        { id: 3, text: "Revelations", isCorrect: true },
      ],
    },
    {
      text: "Who had a coat of carmel hair and ate locusts and wild honey?",
      options: [
        { id: 0, text: "John the baptist", isCorrect: true },
        { id: 1, text: "David", isCorrect: false },
        { id: 2, text: "Hezekiah", isCorrect: false },
        { id: 3, text: "Isaiah", isCorrect: false },
      ],
    },
    {
      text: "How many books are there in the bible?",
      options: [
        { id: 0, text: "79", isCorrect: false },
        { id: 1, text: "82", isCorrect: false },
        { id: 2, text: "66", isCorrect: true },
        { id: 3, text: "53", isCorrect: false },
      ],
    },
    {
      text: "Who commanded the sun and moon to stand still?",
      options: [
        { id: 0, text: "Moses", isCorrect: false },
        { id: 1, text: "Joshua", isCorrect: true },
        { id: 2, text: "John", isCorrect: false },
        { id: 3, text: "Zechariah", isCorrect: false },
      ],
    },
    {
      text: "In what language was the New Testament written?",
      options: [
        { id: 0, text: "Hebrew", isCorrect: false },
        { id: 1, text: "English", isCorrect: false },
        { id: 2, text: "Greek", isCorrect: true },
        { id: 3, text: "Sumerian", isCorrect: false },
      ],
    },
    {
      text: "How did Stephen die?",
      options: [
        { id: 0, text: "Stabbed with a sword", isCorrect: false },
        { id: 1, text: "Drowned in a river", isCorrect: false },
        { id: 2, text: "Hanged on a tree", isCorrect: false },
        { id: 3, text: "Stoned to death", isCorrect: true },
      ],
    },
    {
      text: "What is the longest book of the bible?",
      options: [
        { id: 0, text: "Psalms", isCorrect: true },
        { id: 1, text: "1st Corinthians", isCorrect: false },
        { id: 2, text: "Genesis", isCorrect: false },
        { id: 3, text: "Isaiah", isCorrect: false },
      ],
    },
    {
      text: "How many books are there in the bible?",
      options: [
        { id: 0, text: "79", isCorrect: false },
        { id: 1, text: "82", isCorrect: false },
        { id: 2, text: "66", isCorrect: true },
        { id: 3, text: "53", isCorrect: false },
      ],
    },
    {
      text: "In what language was the Old Testament wrtten?",
      options: [
        { id: 0, text: "Greek", isCorrect: false },
        { id: 1, text: "Hebrew", isCorrect: true },
        { id: 2, text: "English", isCorrect: false },
        { id: 3, text: "Yoruba", isCorrect: false },
      ],
    },
    {
      text: "What was Jacob's eldest son called?",
      options: [
        { id: 0, text: "Dan", isCorrect: false },
        { id: 1, text: "Judah", isCorrect: false },
        { id: 2, text: "Rueben", isCorrect: true },
        { id: 3, text: "Asher", isCorrect: false },
      ],
    },
    {
      text: "What is the book of the bible where we are to read about Haman?",
      options: [
        { id: 0, text: "Ruth", isCorrect: false },
        { id: 1, text: "Malachi", isCorrect: false },
        { id: 2, text: "Jude", isCorrect: false },
        { id: 3, text: "Esther", isCorrect: true },
      ],
    },
    {
      text: "What are the names of Abraham's brothers?",
      options: [
        { id: 0, text: "Nahor and Haran", isCorrect: true },
        { id: 1, text: "Ham and Shem", isCorrect: false },
        { id: 2, text: "Gad and Levi", isCorrect: false },
        { id: 3, text: "Zerah and Shammah", isCorrect: false },
      ],
    },
    {
      text: "What names were Daniel and his brothers given in Babylon?",
      options: [
        { id: 0, text: "Nimrod,Mizraim,Lehabim and Zidon", isCorrect: false },
        { id: 1, text: "Elam,Ashur,Aram and Meshek", isCorrect: false },
        { id: 2, text: "Belteshazzar,Shadrach,Meshack and Abednego", isCorrect: true },
        { id: 3, text: "Dishon,Abiud,Eliakim and Azor", isCorrect: false },
      ],
    },
    {
      text: "What books come before and after Daniel?",
      options: [
        { id: 0, text: "Hosea,Joel", isCorrect: false },
        { id: 1, text: "Ezekiel,Hosea", isCorrect: true },
        { id: 2, text: "Amos,Lamentations", isCorrect: false },
        { id: 3, text: "Ezekiel,Obadiah", isCorrect: false },
      ],
    },
    {
      text: "How many days did Jesus stay in the grave before he resurrected?",
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: true },
        { id: 3, text: "4", isCorrect: false },
      ],
    },
    {
      text: "The Epistles of Paul lasted from what book to what book of the Bible?",
      options: [
        { id: 0, text: "Romans to Jude", isCorrect: false },
        { id: 1, text: "Romans to Hebrews", isCorrect: false },
        { id: 2, text: "John to Hebrews", isCorrect: false },
        { id: 3, text: "Romans to Philemon", isCorrect: true },
      ],
    },
    {
      text: "'For the eyes of the Lord are over the righteous...',this statement can be seen in?",
      options: [
        { id: 0, text: "1st Peter 3:12", isCorrect: true },
        { id: 1, text: "1st Corinthians", isCorrect: false },
        { id: 2, text: "Genesis", isCorrect: false },
        { id: 3, text: "Isaiah", isCorrect: false },
      ],
    },
    {
      text: "In what city was Jesus born?",
      options: [
        { id: 0, text: "Somalia", isCorrect: false },
        { id: 1, text: "Lebanon", isCorrect: false },
        { id: 2, text: "Bethlehem", isCorrect: true },
        { id: 3, text: "Liberia", isCorrect: false },
      ],
    },
    {
      text: "_____ denied Jesus three times",
      options: [
        { id: 0, text: "Paul", isCorrect: false },
        { id: 1, text: "Peter", isCorrect: true },
        { id: 2, text: "John", isCorrect: false },
        { id: 3, text: "Judas", isCorrect: false },
      ],
    },
    {
      text: "Who recognised Jesus as the messiah when he was presented at the Temple as a baby?",
      options: [
        { id: 0, text: "Micah", isCorrect: false },
        { id: 1, text: "Zechariah", isCorrect: false },
        { id: 2, text: "Simeon", isCorrect: true },
        { id: 3, text: "Elizabeth", isCorrect: false },
      ],
    },
  ]; 

  // Helper functions

  const optionClicked =(isCorrect) => {
    if( isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
    
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Bible Quiz</h1>

      {/* 2. Current Score */}
      <h2>Current Score: {score}</h2>

      { showFinalResults ? (
        /* 4. Final Results */
      <div className='final-results'>
        <h1>Final Results</h1>
        <h2>{score} out of {questions.length} Correct - ({(score/questions.length) * 100}%)</h2>
        <button onClick={() => restartGame()}>Restart Quiz</button>
      </div>
     
     ) : (
      /* 3. Question Card */
      <div className='question-card'>
        <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
        <h3 className='question-text'>{questions[currentQuestion].text}</h3>

        {<ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
          })}
        </ul>}
        



      </div>
     )
      }

      

    </div>
  );
}

export default App;
