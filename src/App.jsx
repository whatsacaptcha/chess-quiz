import { useEffect, useReducer } from 'react';

import chessQuestions from './data/chessQuestions.json';

import Header from './components/Header';
import Main from './components/Main';
import StartScreen from './components/StartScreen';
import PlayScreen from './components/PlayScreen';
import EndScreen from './components/EndScreen';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const initialState = {
  questions: [],
  index: 0,
  score: 0,
  answer: null,
  // loading, waiting, playing, finished, error
  status: 'loading',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'data':
      return { ...state, status: 'waiting', questions: payload };

    case 'start':
      return { ...initialState, status: 'playing', questions: state.questions };

    case 'answer':
      console.log(payload);
      console.log(state.questions[state.index].correctOption);
      state.answer = payload;
      return {
        ...state,
        score:
          payload === state.questions[state.index].correctOption
            ? state.score + state.questions[state.index].points
            : state.score,
      };

    case 'next':
      if (state.index >= state.questions.length - 1)
        return { ...state, status: 'finished', answer: null };

      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error('Unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    dispatch({ type: 'data', payload: chessQuestions.questions });
  }, []);

  // This version of useEffect was used with json-server during development
  // useEffect(function () {
  //   async function fetchQuestions() {
  //     try {
  //       const res = await fetch(`http://localhost:9000/questions`);
  //       const data = await res.json();
  //       dispatch({ type: 'data', payload: data });
  //     } catch {
  //       dispatch({ type: 'error' });
  //     }
  //   }

  //   fetchQuestions();
  // }, []);

  return (
    <>
      <Header />
      <Main>
        {state.status === 'loading' && <LoadingScreen />}

        {state.status === 'waiting' && <StartScreen dispatch={dispatch} />}

        {state.status === 'playing' && (
          <PlayScreen
            dispatch={dispatch}
            questions={state.questions}
            answer={state.answer}
            index={state.index}
            score={state.score}
          />
        )}

        {state.status === 'finished' && (
          <EndScreen dispatch={dispatch} score={state.score} />
        )}
      </Main>
      <Footer />
    </>
  );
}

export default App;
