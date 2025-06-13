import Button from './Button';

function EndScreen({ dispatch, score }) {
  return (
    <div className="endscreen">
      <p>Your final score is {score}</p>
      <Button className={'btn btn-start'} dispatch={dispatch} type="start">
        Play Again
      </Button>
    </div>
  );
}

export default EndScreen;
