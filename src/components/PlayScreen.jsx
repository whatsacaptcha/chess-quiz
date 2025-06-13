// const q = [
//   {
//     question: 'What is your name?',
//     options: ['Joe', 'John', 'Jill', 'Jim'],
//     correctOptions: 0,
//     points: 10,
//   },
// ];

import Progress from './Progress';
import Score from './Score';
import Question from './Question';
import Button from './Button';

function PlayScreen({ dispatch, questions, answer, index, score }) {
  return (
    <div className="game-container">
      <div className="game-state">
        <Progress questions={questions} index={index} />
        <Score questions={questions} score={score} />
      </div>

      <Question
        questions={questions}
        index={index}
        answer={answer}
        dispatch={dispatch}
      />

      <Button dispatch={dispatch} type="next" className="btn btn-next">
        Next Question
      </Button>
    </div>
  );
}

export default PlayScreen;
