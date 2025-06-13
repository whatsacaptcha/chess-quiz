import Button from './Button';

function StartScreen({ dispatch }) {
  return (
    <div className="startscreen">
      <p>Are you ready?</p>
      <Button dispatch={dispatch} type="start" className="btn btn-start">
        Start Quiz
      </Button>
    </div>
  );
}

export default StartScreen;
