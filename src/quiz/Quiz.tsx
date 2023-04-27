import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

import QuizImg from '../images/quiz.png';
import Apple from '../icons/apple.svg';

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
  apple: {
    
  },
  questionCount: {},
  questionText: {
    marginBottom: "32px",
    fontSize: "20px",
    fontWeight: 600,
    color: "#fff",
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
  nextBtn: {
    display: "flex",
    marginTop: "32px",
    padding: "10px 45px",
    fontSize: "40px",
    color: "white",
    background: "#6225E6",
    transition: "1s",
    boxShadow: "6px 6px 0 black",
    transform: "skewX(-15deg)",

    '& span': {
      transform: "skewX(15deg)", 
    },

    '& span:nth-child(2)': {
      width: "20px",
      marginLeft: "30px",
      position: "relative",
      top: "12%",
      transition: "0.5s",
      marginRight: "0px",
    },

    '&:hover': {
      transition: "0.5s",
      boxShadow: "10px 10px 0 #FBC638",

      '& path:last-child': {
        animation: 'color_anim 1s infinite 0.2s',
      },

      '& path:first-child': {
        transform: 'translateX(0%)',
        animation: 'color_anim 1s infinite 0.6s',
      },

      '& path:nth-child(2)': {
        transform: 'translateX(0%)',
        animation: 'color_anim 1s infinite 0.4s',
      },

      '& span:nth-child(2)': {
        transition: "0.5s",
        marginRight: "45px",
      }
    },
  },
  one: {
    transition: "0.4s",
    transform: "translateX(-60%)",
  },
  two: {
    transition: "0.5s",
    transform: "translateX(-30%)",
  },
  three: {}
});

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'What is the tallest mammal?',
    options: ['Elephant', 'Giraffe'],
    answer: 'Giraffe'
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Euro'],
    answer: 'Yen'
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const classes = useStyles();

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleFinishButtonClick = () => {};

  return (
    <div className={classes.quizContainer}>
      {showScore ? (
        <div className={classes.startAndScoreSection}>
          <h1>Игра завершена!</h1>
          <p>Всего вопросов: {questions.length}</p>
          <p>Правильных ответов: {score}</p>
          <button onClick={handleFinishButtonClick}>Закрыть</button>
        </div>
      ) : (
        <>
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
            <div className={classes.questionText}>{questions[currentQuestion].question}</div>

            <Grid container direction="row" justifyContent="space-evenly">
              {questions[currentQuestion].options.map((option) => (
                <label key={option} className={classes.label}>
                  <input
                    type='radio'
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              ))}
            </Grid>
            
            <button className={classes.nextBtn} onClick={handleNextQuestion}>
              <span>NEXT</span>
              <span>
                <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path className={classes.one} d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className={classes.two} d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className={classes.three} d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </span> 
            </button>
          </Grid>
        </>
      )}
    </div>
  );
}

const QuizApp = () => {
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
          <p>На доске указан вопрос, внизу даны два варианта ответа. Один из них не правельный. Виберите правильный ответ. </p>
          <button onClick={handleStartButtonClick}>СТАРТ</button>
        </div>
      )}
    </Grid>
  );
}

export default QuizApp;

