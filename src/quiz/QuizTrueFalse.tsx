import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

import QuizImg from '../images/quiz-true-false.png';
import Apple from '../icons/apple.svg';
import Timer from '../icons/timer.png';

const useStyles = makeStyles({
  quizAppContainer: {
    padding: '30px',
    height: '940px',
    position: 'relative',
    backgroundImage: `url(${QuizImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
  },
  quizContainer: {},
  startAndScoreSection: {
    background: '#fff',
    padding: '36px',
    borderRadius: '36px',
    textAlign: 'center',

    '& h1': {
      color: 'rgba(230, 55, 31, 1)',
      fontSize: '35px',
    },

    '& p': {
      maxWidth: '380px',
      fontSize: '20px',
      lineHeight: '28px',
    },

    '& button': {
      marginTop: '30px',
      padding: '15px 30px',
      background: '#C03F3F',
      border: 'none',
      color: '#fff',
      borderRadius: '15px',
      minWidth: '220px',
      fontSize: '25px',
      textTransform: 'uppercase',
      boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.4)',
      cursor: 'pointer',
    }
  },
  questionSection: {
    position: 'absolute',
    top: '40px',
    left: '0',
    right: '0',

    '& span': {
      color: 'rgba(15, 128, 134, 1)',
      display: 'flex',
      fontSize: '30px',
      margin: '0 12px',

      '& span': {
        margin: 0,
        padding: '0 5px',
        borderBottom: '3px solid rgba(217, 217, 217, 1)',

        '&:last-child': {
          margin: '0 16px',
          display: 'flex',
          borderBottom: 0,
          fontWeight: 600,
        }
      }
    }
  },
  apple: {},
  timer: {
    fontSize: '35px',
    color: 'rgba(9, 89, 94, 1)',
    textAlign: 'center',
  },
  timeLeftContainer: {
    position: 'absolute',
    background: '#fff',
    width: '100%',
    maxWidth: '450px',
    left: 0,
    right: 0,
    margin: '0 auto',
    top: '30%',
    zIndex: 999,
    borderRadius: '20px',

    '& div': {
        margin: '3em 1em 3em 3em',
        fontSize: '25px',
        fontWeight: 600,
    }
  },
  questionCount: {},
  questionText: {
    marginBottom: "32px",
    fontSize: "20px",
    fontWeight: 600,
    borderRadius: '20px',
    padding: '32px 16px',
    color: '#000',
    background: 'rgba(255, 253, 253, 0.85)',

    '& button': {
        border: 0,
        background: 'none',
        cursor: 'pointer'
    }
  },
  answerSection: {
    '&.MuiGrid-root': {
      margin: "0 auto",
      height: "120vh",
    }
  },
  label: {
    margin: "0 20px",
    padding: "10px",
    width: "100px",
    position: "relative",
    
    textAlign: "center",
    background: "#fff",
    borderRadius: "10px",
    fontSize: "20px",
    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.4)",

    '& input': {
      width: "100px",
      visibility: "hidden",
      position: "absolute",
    },

    '&:has(> input:checked)': {
      background: 'rgba(192, 63, 63, 1)',
      color: '#fff',
    }
  },
});

const questions = [
  {
    question: 'Is the Paris capital of France?',
    answer: true
  },
  {
    question: 'Is the Elephant tallest mammal?',
    answer: false
  },
  {
    question: 'Is the Euro currency of Japan?',
    answer: false
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // const [questions, setQuestions] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const classes = useStyles();

  useEffect(() => {
    // Fetch questions from API or import from local file
    // ToDos
    // const fetchQuestions = async () => {
    //  const response = await fetch('https://myquizapi.com/questions');
    //  const data = await response.json();
    //  setQuestions(data);
    // };
    // fetchQuestions();
  }, []);

  useEffect(() => {
    // Timer countdown
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(intervalId);
      // End of game logic
      setTimeLeft(0);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleAnswerClick = (answer: any) => {
    if (answer.toLowerCase() === questions[currentQuestion].answer.toString()) {
      setScore(prevScore => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // End of game logic
      setShowScore(true);
    }
  };

  const handleTrueClick = () => {
    handleAnswerClick('True');
  };

  const handleFalseClick = () => {
    handleAnswerClick('False');
  };

  const handleFinishButtonClick = () => {};

  return (
    <div className={classes.quizContainer}>
      {timeLeft === 0 && (
        <Grid container justifyContent="space-between" className={classes.timeLeftContainer}>
            <div>
                Время истекло
            </div>
            <img src={Timer} alt="timer"/>
        </Grid>
      )}
      {showScore ? (
        <div className={classes.startAndScoreSection}>
          <h1>Игра завершена!</h1>
          <p>Всего вопросов: {questions.length}</p>
          <p>Правильных ответов: {score}</p>
          <button onClick={handleFinishButtonClick}>Закрыть</button>
        </div>
      ) : (
        <Grid style={{ opacity: timeLeft === 0 ? 0.5 : 1, pointerEvents: timeLeft === 0 ? 'none' : 'visible' }}>
          <Grid container justifyContent="center" className={classes.questionSection}>
            <div className={classes.questionCount}>
              <span>
                {[...Array(questions.length)].map((e, i) => 
                  <span className={classes.apple} key={i}>
                    <img src={Apple} alt="apples" style={{ opacity: i <= currentQuestion  ? 1 : 0.5 }} />
                  </span>
                )}
                <span>{currentQuestion + 1}/{questions.length}</span>
              </span>
            </div>
          </Grid>
          <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.answerSection}>
            {questions.length > 0 && (
                <Grid container className={classes.questionText}>
                    <button onClick={handleTrueClick}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_true)">
                            <path d="M40.0226 80.0453C62.1265 80.0453 80.0453 62.1265 80.0453 40.0226C80.0453 17.9187 62.1265 0 40.0226 0C17.9187 0 0 17.9187 0 40.0226C0 62.1265 17.9187 80.0453 40.0226 80.0453Z" fill="#95C11F"/>
                            <path d="M70.6731 16.2988L33.2764 55.8234L9.32617 33.1409L33.6838 71.4884L70.6731 16.2988Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_true">
                            <rect width="80" height="80" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <div style={{ margin: '0 20px' }}>{questions[currentQuestion].question}</div>
                    <button onClick={handleFalseClick}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_false)">
                            <path d="M40.0226 80.0453C62.1265 80.0453 80.0453 62.1265 80.0453 40.0226C80.0453 17.9187 62.1265 0 40.0226 0C17.9187 0 0 17.9187 0 40.0226C0 62.1265 17.9187 80.0453 40.0226 80.0453Z" fill="#CC1123"/>
                            <path d="M57.8161 17.974L40.0233 35.7669L22.1851 17.974L17.9746 22.1845L35.7675 40.0227L17.9746 57.8155L22.1851 62.0713L40.0233 44.2332L57.8161 62.0713L62.072 57.8155L44.2338 40.0227L62.072 22.1845L57.8161 17.974Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_false">
                            <rect width="80" height="80" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                </Grid>
            )}
          </Grid>
          <div className={classes.timer}>Таймер: {timeLeft} секунд</div>
        </Grid>
      )}
    </div>
  );
}

const QuizTrueFalseApp = () => {
  const classes = useStyles();
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartButtonClick = () => {
    setGameStarted(true);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.quizAppContainer}>
      {gameStarted ? (
        <Quiz />
      ) : (
        <div className={classes.startAndScoreSection}>
          <h1>Правила игры:</h1>
          <p>Перед вами представлен какой то факт. По двум краям карточки находятся кнопки “верно” или “не верно”. На каждый вопрос даётся 30 секунд.</p>
          <button onClick={handleStartButtonClick}>СТАРТ</button>
        </div>
      )}
    </Grid>
  );
}

export default QuizTrueFalseApp;

